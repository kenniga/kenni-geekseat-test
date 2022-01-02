import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    BsFillBookmarkHeartFill,
    BsArrowLeftShort,
    BsArrowRightShort,
    BsAwardFill,
    BsCalendarFill
} from 'react-icons/bs';

import Divider from '../index';
import { IDividerProps } from '../interface';

const PrimaryTemplate: ComponentStory<typeof Divider> = (args) => <Divider {...args}>{args.children}</Divider>;

const AlignmentTemplate: ComponentStory<typeof Divider> = (args) => {
    const alignmentCenter: IDividerProps = {
        children: 'Center (default)',
        alignment: 'center'
    };
    const alignmentStart: IDividerProps = {
        children: 'Start',
        alignment: 'start'
    };
    const alignmentEnd: IDividerProps = {
        children: 'End',
        alignment: 'end'
    };
    return (
        <>
            <Divider {...args} {...alignmentStart}>
                {alignmentStart.children}
            </Divider>
            <Divider {...args} {...alignmentCenter}>
                {alignmentCenter.children}
            </Divider>
            <Divider {...args} {...alignmentEnd}>
                {alignmentEnd.children}
            </Divider>
        </>
    );
};

const LineStyleTemplate: ComponentStory<typeof Divider> = (args) => {
    const lineStyleSolid: IDividerProps = {
        children: 'Solid (default)'
    };
    const lineStyleDashed: IDividerProps = {
        children: 'Dashed',
        lineStyle: 'dashed'
    };
    const lineStyleDotted: IDividerProps = {
        children: 'Dotted',
        lineStyle: 'dotted'
    };
    return (
        <>
            <Divider {...args} {...lineStyleSolid}>
                {lineStyleSolid.children}
            </Divider>
            <Divider {...args} {...lineStyleDashed}>
                {lineStyleDashed.children}
            </Divider>
            <Divider {...args} {...lineStyleDotted}>
                {lineStyleDotted.children}
            </Divider>
        </>
    );
};

const LineWeightTemplate: ComponentStory<typeof Divider> = (args) => {
    const lineWeightLight: IDividerProps = {
        children: 'Light',
        lineWeight: 'light'
    };

    const lineWeightRegular: IDividerProps = {
        children: 'Regular (default)',
        lineWeight: 'regular'
    };

    const lineWeightHeavy: IDividerProps = {
        children: 'Heavy',
        lineWeight: 'heavy'
    };

    return (
        <>
            <Divider {...args} {...lineWeightLight}>
                {lineWeightLight.children}
            </Divider>
            <Divider {...args} {...lineWeightRegular}>
                {lineWeightRegular.children}
            </Divider>
            <Divider {...args} {...lineWeightHeavy}>
                {lineWeightHeavy.children}
            </Divider>
        </>
    );
};

const LineCustomContentTemplate: ComponentStory<typeof Divider> = (args) => {
    return (
        <>
            <Divider {...args}>Text Content</Divider>
            <Divider {...args}>
                <BsFillBookmarkHeartFill color="#e729ad" height={15} />
            </Divider>
            <Divider {...args}>
                <BsArrowLeftShort color="#3a6fc4" />
                <BsAwardFill color="#3a6fc4" />
                <BsArrowRightShort color="#3a6fc4" />
            </Divider>
            <Divider {...args} lineStyle="dashed" lineWeight="regular" alignment="start">
                <BsCalendarFill height={15} />
            </Divider>
        </>
    );
};

export default {
    title: 'Divider',
    component: Divider,
    argTypes: {
        alignment: {
            options: ['start', 'center', 'end'],
            control: { type: 'radio' }
        },
        lineStyle: {
            options: ['solid', 'dashed', 'dotted'],
            control: { type: 'radio' }
        },
        lineWeight: {
            options: ['light', 'regular', 'heavy'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<typeof Divider>;

export const Default = PrimaryTemplate.bind({});

Default.args = {
    children: 'Label'
};

export const Alignment = AlignmentTemplate.bind({});
export const LineStyle = LineStyleTemplate.bind({});
export const LineWeight = LineWeightTemplate.bind({});
export const LineCustomContent = LineCustomContentTemplate.bind({});
