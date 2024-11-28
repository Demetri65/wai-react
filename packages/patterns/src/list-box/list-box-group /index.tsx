import { forwardRef } from "react";
import { List, ListProps } from "../../../components/list";
import { ListItem } from "../../../components/list/list-item";

export type ListBoxGroupProps = {
    label: string;
} & ListProps;

export const ListBoxGroup = forwardRef<HTMLUListElement, ListBoxGroupProps>(({ children, label, ...rest }: ListBoxGroupProps, ref) => {
    return (
        <List role="group" {...rest} aria-labelledby={label} ref={ref}>
            <ListItem>
                {label}
            </ListItem>
            {children}
        </List>
    )
});