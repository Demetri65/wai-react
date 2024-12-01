import { HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLSpanElement>

export const Text = ({children, ...rest}: TextProps) => {
    return (
        <span {...rest}>{children}</span>
    )
};