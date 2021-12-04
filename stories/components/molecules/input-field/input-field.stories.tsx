import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputField from '../../../../components/molecules/input-field'

export default {
  title     : 'Components/Molecules/InputField',
  component : InputField
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (args) => <InputField { ...args } />

export const Default = Template.bind({})
Default.args = {
  label       : 'First Name',
  type        : 'text',
  placeholder : 'Your name'
}

export const NumberField = Template.bind({})
NumberField.args = {
  label       : 'Price',
  type        : 'number',
  placeholder : 'Rp999.999'
}
