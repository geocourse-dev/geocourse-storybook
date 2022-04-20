/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { Contact } from '../../../src/components'

export default {
  title: 'Contact',
  component: Contact,
}

const Template = (args) => <Contact {...args} />

export const contact = Template.bind({})

contact.args = {}
