import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    name: "Heading Rank 1",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h1"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};

export const H2: Story = {
    name: "Heading Rank 1",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h1"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};

export const H3: Story = {
    name: "Heading Rank 3",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h3"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};

export const H4: Story = {
    name: "Heading Rank 4",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h4"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};
export const H5: Story = {
    name: "Heading Rank 5",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h5"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};
export const H6: Story = {
    name: "Heading Rank 6",
    argTypes: {
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        rank: "h6"
    },
    render: (args) => <Heading {...args}>Lorem Ipsum</Heading>
};