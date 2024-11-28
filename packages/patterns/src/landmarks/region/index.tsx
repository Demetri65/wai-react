import { forwardRef, HTMLAttributes } from "react"
import { Heading, HeadingProps } from "../../../components/heading";

export type RegionProps = {
    /**
     * Label to describe the Region. 
     * This is used as a heading in the component and will be passed as aria-label for accessibility.
     * Note: `aria-labelledby` and `title` are ommitted as props becuase the header in a region component can be identified in multiple ways.
     * 
     * @see https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/region.html#:~:text=HTML%20Example%3A%20Using%20section%5Baria%2Dlabelledby%5D%20attribute
     */
    label: HTMLAttributes<HTMLElement>['aria-label'];
    /**
     * Rank to describe the order in which the Region will sit
     * 
     */
    rank: HeadingProps['rank'];
} & Omit<HTMLAttributes<HTMLElement>, "aria-labelledby" | "title">;


/**
 * Region Pattern is a perceivable section containing content that is relevant to a specific,
 * author-specified purpose and sufficiently important that users will likely want to be able
 * to navigate to the section easily and to have it listed in a summary of the page.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/region.html for usage of the Region pattern
 */
export const Region = forwardRef<HTMLElement, RegionProps>(({ children, label, ...rest }: RegionProps, ref) => {
    console.log(typeof label)
    return (
        <section aria-label={label} {...rest} ref={ref}>
            <Heading>{label}</Heading>
            {children}
        </section>
    )
});