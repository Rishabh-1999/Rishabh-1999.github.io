import React from "react";

/* Style Util */
import classnames from "classnames";

/* Type */
import { ButtonType } from "./index.type";

function Button({ type = "a", className, children, ...props }: ButtonType) {
    if (type === "a")
        return (
            <a
                role="button"
                className={classnames("custom-btn", className)}
                {...props}
            >
                {children}
            </a>
        );
    else
        return (
            <button className={classnames("custom-btn", className)} {...props}>
                {children}
            </button>
        );
}

export default React.memo(Button);
