import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '.';

const meta = {
  title: 'Components/List/List Item',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ListItem>
            hello
        </ListItem>
    )
    
};
