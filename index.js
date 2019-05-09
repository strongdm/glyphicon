import classNames from 'classnames'
import React from 'react'
import { bsClass, getClassSet, prefix, splitBsProps } from './src/utils/bootstrapUtils'

class Glyphicon extends React.Component {
  render () {
    const { glyph, className, ...props } = this.props
    const [bsProps, elementProps] = splitBsProps(props)

    const classes = {
      ...getClassSet(bsProps),
      [prefix(bsProps, glyph)]: true
    }

    return (
      <span
        {...elementProps}
        className={classNames(className, classes)}
      />
    )
  }
}

export default bsClass('glyphicon', Glyphicon)
