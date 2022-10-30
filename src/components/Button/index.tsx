import React from "react";

/* Styles Utils */
import classnames from "classnames";

/* Styles */
import "./button.styles.scss";

/* Types */
import { ButtonType } from "./button.type";

function Button({
    className = "",
    disabled = false,
    children,
    outline = false,
    ...props
}: ButtonType) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={classnames(
                "standard-button",
                {
                    full: !outline,
                    "cursor-not-allowed shadow-none": disabled,
                },
                className
            )}
        >
            {children}
        </button>
    );
}

export default React.memo(Button);
