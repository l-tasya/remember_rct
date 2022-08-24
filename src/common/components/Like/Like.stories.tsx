import React from 'react';
import {ComponentStory} from "@storybook/react";
import {Like} from "./Like";


export default {
    title: 'Example/Like',
    component: Like,
}
const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;
export const Example1 = Template.bind({isLiked: true});