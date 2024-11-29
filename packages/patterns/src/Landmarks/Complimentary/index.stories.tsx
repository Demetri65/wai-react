import type { Meta, StoryObj } from '@storybook/react';
import { Complimentary } from './Complimentary';

const meta = {
    title: 'Patterns/Landmarks/Complimentary',
    component: Complimentary,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof Complimentary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Complimentary with Heading",
    argTypes: {
        label: {
            control: 'text',
            description: 'The label to describe the Complimentary Pattern',
        },
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading rank within a context',
        }
    },
    args: {
        label: 'Heading',
        rank: 'h1'
    },
    render: (args) => <Complimentary {...args}>Children of the aside or Complimentary</Complimentary>
};

