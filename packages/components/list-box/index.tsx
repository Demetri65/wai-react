import { forwardRef, HTMLAttributes } from "react";

export type ListBoxProps = {

} & HTMLAttributes<HTMLDivElement>;

export const ListBox = forwardRef<HTMLDivElement, ListBoxProps>(({ children, ...rest }: ListBoxProps, ref) => {
    return (
        <div tabIndex={0} ref={ref} {...rest}>
            {children}
        </div>
    )
});