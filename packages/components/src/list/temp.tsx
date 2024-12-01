import { forwardRef, HTMLAttributes } from "react";

export type ListProps = {
} & HTMLAttributes<HTMLUListElement>;

export const List = forwardRef<HTMLUListElement, ListProps>(({children, ...rest}: ListProps, ref) => {
    return (
        <ul {...rest} ref={ref}>
            {children}
        </ul>
    )
});

export * from './list-item/list-item';