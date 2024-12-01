import { forwardRef, HTMLAttributes } from "react"

export type AccordionPanelProps = {
    /**
     * control is the ID to match the control prop within the accordion header
     * 
     * Will be passed in as `aria-controls`
     * @example control="section1"
     */
    control: HTMLAttributes<HTMLElement>['aria-controls'];
    /**
     * expanded is the state of displaying the panel
     * 
     * Will be passed in as `aria-controls`
     * @example control="section1"
     */
    expanded: HTMLAttributes<HTMLElement>['aria-expanded'];
} & Omit<HTMLAttributes<HTMLDivElement>, "aria-labelledby">


export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(({ children, control, expanded, ...rest }: AccordionPanelProps, ref) => {

    return (
        expanded && (
            <div role="region" aria-labelledby={control} {...rest} ref={ref}>
                {children}
            </div>
        )
    )
});