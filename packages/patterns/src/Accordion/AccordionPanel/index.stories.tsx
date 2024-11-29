import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@wai-react/components/src/text';
import { AccordionPanel } from './AccordionPanel';

const meta = {
    title: 'Patterns/Accordion/Accordion Panel',
    component: AccordionPanel,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof AccordionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Accordion Panel",
    argTypes: {
        control: {
            control: 'text',
            description: 'The id that is used to identify the associated <AccordionHeader>',
        },
        expanded: {
            control: 'radio',
            options: [true, false],
            description: 'The value to disctate the state of the Accordion Panel'
        },
    },
    args: {
        control: 'panel1',
        expanded: true,
        children: <Text>This is an example panel</Text>,
    },
    render: ({children, ...args}) => <AccordionPanel {...args}>
        <Text>{children}</Text>
    </AccordionPanel>
};
