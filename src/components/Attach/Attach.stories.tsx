import {Attach} from "./Attach";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    component: Attach,
    title: 'Attach'
} as ComponentMeta<typeof Attach>

const Template: ComponentStory<typeof Attach> = (args) => <Attach {...args} />;

export const Example1 = Template.bind({})
Example1.args = {
    value: 'vk.com/feed',
    c1: () => {
    }
}
export const Example2 = Template.bind({})
Example2.args = {
    value: undefined,
    c1: () => {
    }
}

