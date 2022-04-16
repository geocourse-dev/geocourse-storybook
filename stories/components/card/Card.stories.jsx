/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { Card } from '../../../src/components'

export default {
  title: 'Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Example1 = Template.bind({})

Example1.args = {
  title: 'Google Earth Engine untuk Pemula',
  textButton: 'Daftar Gratis',
  img: 'dummy.png',
  onclick: () => {},
}

export const Example2 = Template.bind({})

Example2.args = {
  title: 'Membuat Visualisasi 3D untuk Topografi Menggunakan Blender',
  textButton: 'Daftar Gratis',
  img: 'dummy-2.png',
  onclick: () => {},
}
