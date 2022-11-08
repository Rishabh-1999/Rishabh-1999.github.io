import { memo, MouseEvent as ReactMouseEvent } from "react";

/* Styles Utils */
import classnames from "classnames";

/* Material UI */
import MuiDialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

/* Components */
import Button from "../Button";

const DialogTitle = memo(
    ({
        title,
        handleClose,
        ...props
    }: {
        title: string;
        handleClose?: Function;
    }) => {
        return (
            <MuiDialogTitle
                {...props}
                sx={{
                    height: 60,
                    background: "#333333",
                    padding: "24px 40px",
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <p className="lg:text-2xl md:text-xl text-base">{title}</p>
                {handleClose && (
                    <IconButton
                        aria-label="close"
                        onClick={() => handleClose()}
                    >
                        <HighlightOffIcon
                            fontSize="large"
                            className="text-white"
                        />
                    </IconButton>
                )}
            </MuiDialogTitle>
        );
    }
);

const DialogContent = memo(
    ({
        children,
        sx = {},
        ...props
    }: {
        children: JSX.Element | JSX.Element[];
        sx: object;
        className?: string;
    }) => {
        return (
            <MuiDialogContent {...props} sx={sx} dividers>
                <div className="flex flex-col">{children}</div>
            </MuiDialogContent>
        );
    }
);

const DialogActions = memo(
    ({
        children,
        sx = {},
        ...props
    }: {
        children: JSX.Element | JSX.Element[];
        sx?: any;
    }) => {
        return (
            <MuiDialogActions
                sx={{
                    height: 60,
                    padding: "14px 40px",
                    backgroundColor: "#2e2e35",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    ...(sx && sx),
                }}
                {...props}
            >
                {children}
            </MuiDialogActions>
        );
    }
);

type DialogBoxProps = {
    open: boolean;
    children: JSX.Element | JSX.Element[];
    className?: string;
    classesStyles?: object;
    maxWidth?: any;
    showTitle?: boolean;
    title?: string;
    showActions?: boolean;
    showCancelButton?: boolean;
    cancelText?: string;
    handleClose?: () => void;
    showSubmitButton?: boolean;
    submitText?: string;
    submitDisabled?: boolean;
    onSubmitFunc?: Function;
    onSubmitClose?: boolean;
};

const DialogBox = memo(
    ({
        open,
        children,
        className = "",
        classesStyles = {},

        maxWidth = "md",
        showTitle = true,
        title,
        showActions = true,
        showCancelButton = true,
        cancelText = "Cancel",
        handleClose,
        showSubmitButton = true,
        submitText = "Submit",
        submitDisabled = false,
        onSubmitFunc,
        onSubmitClose = true,
        ...props
    }: DialogBoxProps) => {
        const handleOnSubmitFunc = (
            e: ReactMouseEvent<HTMLElement, MouseEvent>
        ): void => {
            if (e.type === "click" && onSubmitFunc) {
                onSubmitFunc();
            }
            if (onSubmitClose && handleClose) handleClose();
        };

        return (
            <>
                <MuiDialog
                    {...props}
                    open={open}
                    maxWidth={maxWidth}
                    onClose={handleClose}
                    sx={{
                        borderRadius: "16px",
                        height: "100vh",
                        background: "transparent",
                    }}
                    fullWidth={true}
                >
                    {showTitle && title && (
                        <DialogTitle handleClose={handleClose} title={title} />
                    )}

                    <DialogContent
                        className={classnames(className)}
                        sx={{
                            backgroundColor: "#e5e5e5",
                            padding: "0",
                        }}
                    >
                        {children}
                    </DialogContent>

                    {showActions && (
                        <DialogActions
                            sx={{
                                ...(!showSubmitButton && {
                                    justifyContent: "right",
                                }),
                                ...(!showCancelButton && {
                                    justifyContent: "right",
                                }),
                            }}
                        >
                            {showCancelButton ? (
                                <Button onClick={handleClose} outline={true}>
                                    {cancelText}
                                </Button>
                            ) : (
                                <></>
                            )}

                            {showSubmitButton ? (
                                <Button
                                    onClick={handleOnSubmitFunc}
                                    disabled={submitDisabled}
                                >
                                    {submitText}
                                </Button>
                            ) : (
                                <></>
                            )}
                        </DialogActions>
                    )}
                </MuiDialog>
            </>
        );
    }
);

export { DialogBox, DialogTitle, DialogContent, DialogActions };
