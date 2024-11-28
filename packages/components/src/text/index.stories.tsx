import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Text>
            hello
        </Text>
    )
    
};
