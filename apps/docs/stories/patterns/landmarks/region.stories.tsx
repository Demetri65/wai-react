import type { Meta, StoryObj } from '@storybook/react';
import { Region } from '@wai-react/patterns/landmarks/region';

const meta = {
    title: 'Patterns/Landmarks/Region',
    component: Region,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof Region>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Region with Heading",
    argTypes: {
        label: {
            control: 'text',
            description: 'The label to describe the Region',
        },
        rank: {
            control: 'radio',
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: 'The heading to describe the region landmark',
        }
    },
    args: {
        label: 'Heading',
        rank: 'h1'
    },
    render: (args) => <Region {...args}>Random content in heading</Region>
};
