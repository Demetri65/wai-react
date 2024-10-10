import type { Meta, StoryObj } from '@storybook/react';
import { ListBoxItem } from '.';


const meta = {
  title: 'Components/List Box/ListBoxItem',
  component: ListBoxItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof ListBoxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ListBoxItem>hello</ListBoxItem>
    )
    
};

