import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StepItem from '../../../../components/molecules/step-item'

export default {
  title     : 'Components/Molecules/StepItem',
  component : StepItem
} as ComponentMeta<typeof StepItem>

const Template: ComponentStory<typeof StepItem> = (args) => <StepItem { ...args } />

export const Default = Template.bind({})
Default.args = {
  title        : '1. Start',
  icon         : '/icon/step-1.svg',
  description1 : 'Pilih salah satu game',
  description2 : 'yang ingin kamu top up'
}
