import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from "@ignite-ui/react"

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  }
} as Meta<ButtonProps>

export const Primay: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
}