/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { CardBlog } from '../../../src/components'

export default {
  title: 'CardBlog',
  component: CardBlog,
}

const Template = (args) => <CardBlog {...args} />

export const Example1 = Template.bind({})

Example1.args = {
  image: 'blog-2.png',
  size: 'large',
  title: 'Belajar Geospasial',
  description:
    'Geospasial atau ruang kebumian adalah aspek keruangan yang menunjukkan lokasi, letak, dan posisi.',
  date: 'Nov 21, 2021',
  author: 'Admin',
}

export const Example2 = Template.bind({})

Example2.args = {
  image: 'blog.png',
  size: 'small',
  title: 'Belajar Geospasial',
  description:
    'Geospasial atau ruang kebumian adalah aspek keruangan yang  menunjukkan lokasi, letak, dan posisi.',
  date: 'Nov 21, 2021',
  author: 'Admin',
}
