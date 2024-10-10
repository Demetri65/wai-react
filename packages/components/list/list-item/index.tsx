import {  forwardRef, HTMLAttributes } from "react";

export type ListItemProps = {
} & HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ className, children, ...rest }: ListItemProps, ref) => {
    return (
        <li className={className} {...rest} ref={ref}>
            {children}
        </li>
    )
});