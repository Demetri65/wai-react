import { HTMLAttributes } from "react"

export type SelectProps = {

} & HTMLAttributes<HTMLSelectElement>;

export const Select = ({children, ...rest}: SelectProps) => (
    <select role="select" {...rest}>
        {children}
    </select>
)