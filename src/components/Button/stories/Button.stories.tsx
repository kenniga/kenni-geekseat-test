import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../index';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});

Primary.args = {
    variant: 'primary',
    children: 'Primary Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button'
};
