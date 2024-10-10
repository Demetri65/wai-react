import { forwardRef, HTMLAttributes, ReactNode } from "react";

export type ListProps = {
} & HTMLAttributes<HTMLUListElement>;

export const List = forwardRef<HTMLUListElement, ListProps>(({className, children, ...rest}: ListProps, ref) => {
    return (
        <ul className={className} {...rest} ref={ref}>
            {children}
        </ul>
    )
});