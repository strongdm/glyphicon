import invariant from 'invariant'
import { SIZE_MAP } from './StyleConfig'

function curry (fn) {
  return (...args) => {
    let last = args[args.length - 1]
    if (typeof last === 'function') {
      return fn(...args)
    }
    return Component => fn(...args, Component)
  }
}

export function prefix (props, variant) {
  invariant(
    props.bsClass != null,
    'A `bsClass` prop is required for this component'
  )
  return props.bsClass + (variant ? `-${variant}` : '')
}

export const bsClass = curry((defaultClass, Component) => {
  let defaultProps = Component.defaultProps || (Component.defaultProps = {})
  defaultProps.bsClass = defaultClass

  return Component
})

export const bsStyles = curry((styles, defaultStyle, Component) => {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle
    defaultStyle = undefined
  }

  let existing = Component.STYLES || []

  styles.forEach(style => {
    if (existing.indexOf(style) === -1) {
      existing.push(style)
    }
  })

  if (defaultStyle !== undefined) {
    let defaultProps = Component.defaultProps || (Component.defaultProps = {})
    defaultProps.bsStyle = defaultStyle
  }

  return Component
})

export const bsSizes = curry((sizes, defaultSize, Component) => {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize
    defaultSize = undefined
  }

  let existing = Component.SIZES || []

  sizes.forEach(size => {
    if (existing.indexOf(size) === -1) {
      existing.push(size)
    }
  })

  const values = []
  existing.forEach(size => {
    const mappedSize = SIZE_MAP[size]
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize)
    }

    values.push(size)
  })

  Component.SIZES = existing

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {}
    }
    Component.defaultProps.bsSize = defaultSize
  }

  return Component
})

export function getClassSet (props) {
  const classes = {
    [prefix(props)]: true
  }

  if (props.bsSize) {
    const bsSize = SIZE_MAP[props.bsSize] || props.bsSize
    classes[prefix(props, bsSize)] = true
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true
  }

  return classes
}

function getBsProps (props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  }
}

function isBsProp (propName) {
  return (
    propName === 'bsClass' ||
    propName === 'bsSize' ||
    propName === 'bsStyle' ||
    propName === 'bsRole'
  )
}

export function splitBsProps (props) {
  const elementProps = {}
  Object.entries(props).forEach(([propName, propValue]) => {
    if (!isBsProp(propName)) {
      elementProps[propName] = propValue
    }
  })

  return [getBsProps(props), elementProps]
}

export function splitBsPropsAndOmit (props, omittedPropNames) {
  const isOmittedProp = {}
  omittedPropNames.forEach(propName => { isOmittedProp[propName] = true })

  const elementProps = {}
  Object.entries(props).forEach(([propName, propValue]) => {
    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue
    }
  })

  return [getBsProps(props), elementProps]
}

/**
 * Add a style variant to a Component.
 */
export function addStyle (Component, ...styleVariant) {
  bsStyles(styleVariant, Component)
}

export const _curry = curry
