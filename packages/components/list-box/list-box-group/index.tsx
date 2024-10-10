import { forwardRef } from "react";
import { List } from "../../list";
import { ListProps } from "../../list";

export type ListBoxGroupProps = {
    label?: string;
} & ListProps;

export const ListBoxGroup = forwardRef<HTMLUListElement, ListBoxGroupProps>(({ children, label, ...rest }: ListBoxGroupProps, ref) => {
    return (
        <List aria-labelledby={label} {...rest} ref={ref}>
            {children}
        </List>
    )
});