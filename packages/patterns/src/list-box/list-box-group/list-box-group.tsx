
import { ListProps, List, ListItem } from "../../../../components/src/list/temp";
import { forwardRef } from "react";


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