import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/src/text';
import { Accordion } from '.';
import { AccordionHeader } from './accordion-header';
import { AccordionPanel } from './accordion-panel';
import { useState } from 'react';

const meta = {
    title: 'Patterns/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'center',
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Accordion Panel",
    render: (args) => {
        const [expanded1, setExpanded1] = useState(false)
        const [expanded2, setExpanded2] = useState(false)
        const [expanded3, setExpanded3] = useState(false)
        const handleClick1 = () => setExpanded1(!expanded1);
        const handleClick2 = () => setExpanded2(!expanded2);
        const handleClick3 = () => setExpanded3(!expanded3);
        return (
            <Accordion {...args}>
                <AccordionHeader onClick={handleClick1} control="panel1" expanded={expanded1}>
                    <Text>Accordion 1</Text>
                </AccordionHeader>
                <AccordionPanel control="panel1" expanded={expanded1}>
                    <Text>This is an accordion panel</Text>
                </AccordionPanel>
                <AccordionHeader onClick={handleClick2} control="panel2" expanded={expanded2}>
                    <Text>Accordion 2</Text>
                </AccordionHeader>
                <AccordionPanel control="panel2" expanded={expanded2}>
                    <Text>This is an accordion panel</Text>
                </AccordionPanel>
                <AccordionHeader onClick={handleClick3} control="panel3" expanded={expanded3}>
                    <Text>Accordion 3</Text>
                </AccordionHeader>
                <AccordionPanel control="panel3" expanded={expanded3}>
                    <Text>This is an accordion panel</Text>
                </AccordionPanel>
            </Accordion>)
    }
};