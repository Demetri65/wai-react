import type { Meta, StoryObj } from '@storybook/react';
import { ListBoxGroup } from '.';
import { ListBoxItem } from '../list-box-item';

// import { List } from '.';
// import { ListBoxItem } from './list-item';

const meta = {
  title: 'Components/List Box/Group',
  component: ListBoxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof ListBoxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ListBoxGroup>
            <ListBoxItem>Hello 1</ListBoxItem>
            <ListBoxItem>Hello 1</ListBoxItem>
            <ListBoxItem>Hello 1
                <ListBoxGroup>
                    <ListBoxItem>Hello 2</ListBoxItem>
                    <ListBoxItem>Hello 2</ListBoxItem>
                    <ListBoxItem>Hello 2
                        <ListBoxGroup>
                            <ListBoxItem>Hello 3</ListBoxItem>
                            <ListBoxItem>Hello 3</ListBoxItem>
                            <ListBoxItem>Hello 3</ListBoxItem>
                        </ListBoxGroup>
                    </ListBoxItem>
                </ListBoxGroup>
            </ListBoxItem>
        </ListBoxGroup>
    )
    
};

