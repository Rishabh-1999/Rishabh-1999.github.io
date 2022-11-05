import React from "react";

/* Material UI */
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function TopUpButton() {
    return (
        <a
            id="to-up"
            href={"#landing_page"}
            className="w-[46px] h-[46px] fixed bottom-8 right-14 dark:bg-greyScorpion bg-grey-nobel hover:scale-105 duration-200 z-50 rounded-full flex justify-center items-center"
        >
            <KeyboardArrowUpIcon
                sx={{
                    fontSize: "44px",
                }}
            />
        </a>
    );
}

export default TopUpButton;
