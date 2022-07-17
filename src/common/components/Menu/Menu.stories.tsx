import {ComponentStory} from "@storybook/react";
import React from "react";
import {Menu} from "./Menu";

export default {
    title: 'Example/Menu',
    component: Menu,
}
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
export const Example2 = Template.bind({});
Example2.args = {
    items: ['Profile', 'Settings', 'Exit'],
}