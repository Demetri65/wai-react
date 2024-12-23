import { forwardRef, useId } from "react";
import { ListItem, ListItemProps } from "@wai-react/components/list";

export type ListBoxItemProps = {
    selected?: boolean;
} & ListItemProps;

export const ListBoxItem = forwardRef<HTMLLIElement, ListBoxItemProps>(({ children, selected = false, ...rest }: ListBoxItemProps, ref) => {
    const optionId = useId();
    return (
        <ListItem role="option" aria-selected={selected} id={optionId} {...rest} ref={ref}>
            {children}
        </ListItem>
    )
});