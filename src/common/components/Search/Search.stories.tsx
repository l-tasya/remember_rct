import { Search } from "./Search";
import {ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Example/Search',
    component: Search,
}
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;
export const Example1 = Template.bind({});