import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameItem from '../../../../components/molecules/game-item'

export default {
  title     : 'Components/Molecules/GameItem',
  component : GameItem
} as ComponentMeta<typeof GameItem>

const Template: ComponentStory<typeof GameItem> = (args) => <GameItem { ...args } />

export const Default = Template.bind({})
Default.args = {
  title     : 'Super Mecha',
  category  : 'mobile',
  thumbnail : '/img/Thumbnail-1.png'
}
