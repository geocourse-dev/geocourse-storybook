/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { Button } from '../../../src/components'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary',
  children: 'Daftar Gratis',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Daftar Gratis',
}
