import { forwardRef } from "react";
import { ListItem, ListItemProps } from "../../list/list-item";

export type ListBoxItemProps = {

} & ListItemProps;

export const ListBoxItem = forwardRef<HTMLLIElement, ListBoxItemProps>(({ children, ...rest }: ListBoxItemProps, ref) => {
    return (
        <ListItem {...rest} ref={ref}>
            {children}
        </ListItem>
    )
});