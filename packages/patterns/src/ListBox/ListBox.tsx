import { forwardRef, HTMLAttributes, useId } from "react";

export type ListBoxProps = {

} & HTMLAttributes<HTMLDivElement>;

export const ListBox = forwardRef<HTMLDivElement, ListBoxProps>(({ children, ...rest }: ListBoxProps, ref) => {
    const listBoxId = useId()
    return (
        <div tabIndex={0} id={listBoxId} {...rest} ref={ref} >
            {children}
        </div>
    )
});