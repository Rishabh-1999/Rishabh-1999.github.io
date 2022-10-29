export interface ButtonType {
    className?: string;
    disabled?: boolean;
    children?: JSX.Element | JSX.Element[] | string | string[];
    outline?: boolean;
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}
