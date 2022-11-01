import React from "react";

/* Material UI */
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function TopUpButton() {
    return (
        <a
            href={"#landing_page"}
            className="w-[45px] h-[45px] fixed bottom-8 right-12 bg-greyScorpion hover:scale-110 hover:text-zinc-900 z-50 rounded-full flex justify-center items-center"
        >
            <KeyboardArrowUpIcon
                sx={{
                    fontSize: "40px",
                }}
            />
        </a>
    );
}

export default TopUpButton;
