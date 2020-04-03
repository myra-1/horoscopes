import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import './Header.css'

storiesOf('Header', module)
  .add('Header', () => (
    <Header />
  ))
