import { HTMLAttributes } from "react";

export type HeadingProps = {
    rank?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>

export const Heading = ({rank = "h1", children, ...rest}: HeadingProps) => {
    switch (rank) {
        case 'h1':
            return <h1 {...rest}>{children}</h1>
        case 'h2':
            return <h2 {...rest}>{children}</h2>
        case 'h3':
            return <h3 {...rest}>{children}</h3>
        case 'h4':
            return <h4 {...rest}>{children}</h4>
        case 'h5':
            return <h5 {...rest}>{children}</h5>
        case 'h6':
            return <h6 {...rest}>{children}</h6>
    }
}