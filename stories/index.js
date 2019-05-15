import React from 'react'
import { storiesOf } from '@storybook/react'
import Glyphicon from '../src/index'

storiesOf('Glyphicon', module)
  .add('remove sign', () => (
    <div>
        The remove sign <Glyphicon glyph='remove-sign' />
    </div>
  ))
  .add('info sign', () => (
    <div>
        The info sign <Glyphicon glyph='info-sign' />
    </div>
  ))
  .add('danger variant', () => (
    <div>
        The info sign <Glyphicon glyph='info-sign' bsStyle='danger' />
    </div>
  ))
  .add('with a custom CSS class', () => (
    <div>
      <style dangerouslySetInnerHTML={{__html: '.bananas { color: yellow; background-color: black}'}} />
        The info sign <Glyphicon glyph='info-sign' className='bananas' />
    </div>
  ))
  .add('with a style attribute', () => (
    <div>
        The info sign <Glyphicon glyph='info-sign' style={{color: 'purple'}} />
    </div>
  ))
  .add('large size', () => (
    <div>
        The info sign <Glyphicon glyph='info-sign' bsSize='x-large' />
    </div>
  ))
