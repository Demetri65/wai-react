import type { Meta, StoryObj } from '@storybook/react';

import { List } from '.';
import { ListItem } from './ListItem/ListItem';

const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <List>
            <ListItem>Hello 1</ListItem>
            <ListItem>Hello 1</ListItem>
            <ListItem>Hello 1
                <List>
                    <ListItem>Hello 2</ListItem>
                    <ListItem>Hello 2</ListItem>
                    <ListItem>Hello 2
                        <List>
                            <ListItem>Hello 3</ListItem>
                            <ListItem>Hello 3</ListItem>
                            <ListItem>Hello 3</ListItem>
                        </List>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    )
    
};

