import { forwardRef, HTMLAttributes } from "react"
import { Heading } from "@wai-react/components/heading";

export type AccordionHeaderProps = {
    /**
     * controls is to match the `aria-labelledby` on the AccordionPanel that it interacts with. 
     * Will be passed in as `aria-controls`
     * @example control="section1"
     */
    control: HTMLAttributes<HTMLButtonElement>['aria-controls'];
    /**
     * expanded is the state of displaying the panel
     * 
     * Will be passed in as `aria-controls`
     * @example control="section1"
     */
    expanded: HTMLAttributes<HTMLElement>['aria-expanded'];
} & Omit<HTMLAttributes<HTMLButtonElement>, "aria-controls">;

export const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(({children, control, expanded, onClick, ...rest}: AccordionHeaderProps, ref) => {
    return (
        <Heading rank="h3">
            <button aria-expanded={expanded} onClick={onClick} {...rest} ref={ref}>
                {children}
            </button>
        </Heading>
    )
})