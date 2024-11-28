import {  forwardRef, HTMLAttributes } from "react";

export type ListItemProps = {
} & HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ children, ...rest }: ListItemProps, ref) => {
    return (
        <li {...rest} ref={ref}>
            {children}
        </li>
    )
});