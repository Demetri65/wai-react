import type { Meta, StoryObj } from '@storybook/react';
import { ListBoxGroup } from '.';
import { ListBoxItem } from '../list-box-item';


const meta = {
  title: 'Patterns/List Box/ListBoxGroup',
  component: ListBoxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} as Meta<typeof ListBoxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: {
      label: {
        control: 'text',
        description: 'The label to describe the group',
      }
    },
    args: {
      label: 'Group 1',
    },
    render: (args) => (
      <ListBoxGroup {...args}>
        <ListBoxItem>Item 1</ListBoxItem>
        <ListBoxItem>Item 2</ListBoxItem>
        <ListBoxItem>Item 3</ListBoxItem>
        <ListBoxItem>Item 4</ListBoxItem>
        <ListBoxItem>Item 5</ListBoxItem>
      </ListBoxGroup>
    )
};

