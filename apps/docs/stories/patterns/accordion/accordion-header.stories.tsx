import type { Meta, StoryObj } from '@storybook/react';
import { Text } from "@wai-react/components/text";
import { AccordionHeader } from '@wai-react/patterns/accordion';

const meta = {
    title: 'Patterns/Accordion/Accordion Header',
    component: AccordionHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof AccordionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Accordion Header",
    argTypes: {
        control: {
            control: 'text',
            description: 'The id that is used to identify the controlled panel',
        },
        children: {
            control: 'text',
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
        children: 'Accordion Header'
    },
    render: ({children, ...args}) => <AccordionHeader {...args}>
        <Text>{children}</Text>
    </AccordionHeader>
};

