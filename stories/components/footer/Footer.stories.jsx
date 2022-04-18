/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { Footer } from '../../../src/components'

export default {
  title: 'Footer',
  component: Footer,
}

const Template = (args) => <Footer {...args} />

export const footer = Template.bind({})

footer.args = {}
