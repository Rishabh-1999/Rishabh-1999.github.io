export interface ButtonType {
    type?: "a" | "button";
    className?: string;
    children: React.ReactNode;
    target?: string;
    href?: string;
    rel?: string;
    download?: string;
}
