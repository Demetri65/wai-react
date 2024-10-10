import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from '.';
import { ListBoxGroup } from './list-box-group';
import { ListBoxItem } from './list-box-item';

const meta = {
  title: 'Components/List Box',
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
        </ListBox>
    )
    
};

