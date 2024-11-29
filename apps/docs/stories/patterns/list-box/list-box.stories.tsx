import type { Meta, StoryObj } from '@storybook/react';
import { ListBox, ListBoxItem, ListBoxGroup } from '@wai-react/patterns/list-box';

const meta = {
  title: 'Patterns/List Box',
  component: ListBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ListBox>
            <ListBoxGroup label="Group 1">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBoxGroup>
            <ListBoxGroup label="Group 2">
                <ListBoxItem>Item 4</ListBoxItem>
                <ListBoxItem>Item 5</ListBoxItem>
                <ListBoxItem>Item 6</ListBoxItem>
            </ListBoxGroup>
        </ListBox>
    )
    
};

