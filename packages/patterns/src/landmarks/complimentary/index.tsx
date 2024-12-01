import { forwardRef, HTMLAttributes } from "react"
// import { Heading, HeadingProps } from "@wai-react/components/src/heading";

export type ComplimentaryProps = {
    /**
     * Label to describe the Complimentary. 
     * This is used as a heading in the component and will be passed as aria-labelledby for accessibility.
     *
     */
    label: HTMLAttributes<HTMLElement>['aria-labelledby'];
    /**
     * Rank to describe the order in which the Complimentary will sit
     * 
     */
    rank: any //HeadingProps['rank'];
} & HTMLAttributes<HTMLElement>;

/**
 * Complimentary Pattern descirbes the way content should sit outside a context; however, is still related to such context.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/complementary.html for usage of the Complimentary pattern
 */
export const Complimentary = forwardRef<HTMLElement, ComplimentaryProps>(({ children, label, rank, ...rest }: ComplimentaryProps, ref) => {
    return (
        <aside aria-labelledby={label} {...rest} ref={ref}>
            {/* <Heading rank={rank} id={label}>{label}</Heading> */}
            {children}
        </aside>
    )
});