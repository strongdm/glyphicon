import React from 'react'
import { storiesOf } from '@storybook/react'
import Glyphicon from '../index'

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
