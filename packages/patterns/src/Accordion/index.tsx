import React from "react";
import { forwardRef, HTMLAttributes } from "react"

export type AccordionProps = HTMLAttributes<HTMLDivElement>

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({children, ...rest}: AccordionProps, ref) => {
    return (
        <div id="accordionGroup" {...rest} ref={ref}>
            {children}
        </div>
    )
});

export * from "./accordion-header";
export * from "./accordion-panel";