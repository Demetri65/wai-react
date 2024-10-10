import { forwardRef } from "react";
import { ListItem, ListItemProps } from "../../list/list-item";

export type ListBoxItemProps = {
    selected?: boolean;
} & ListItemProps;

export const ListBoxItem = forwardRef<HTMLLIElement, ListBoxItemProps>(({ children, selected = false, ...rest }: ListBoxItemProps, ref) => {
    return (
        <ListItem aria-selected={selected} {...rest} ref={ref}>
            {children}
        </ListItem>
    )
});