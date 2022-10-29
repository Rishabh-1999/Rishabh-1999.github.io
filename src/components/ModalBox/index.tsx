import React from "react";

/* Styles Utils */
import classnames from "classnames";

/* Material UI */
import MuiDialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

/* Components */
import Button from "../Button";

const useStyles = makeStyles(() => ({
    custom_dialog_root: {
        borderRadius: "16px",
        background: "transparent",
    },
    custom_dialog_paperScrollPaper: {
        height: "100%",
    },
    custom_dialog_title_root: {
        height: 60,
        background: "#333333",
        padding: "24px 40px",
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));

const DialogTitle = React.memo(
    ({
        title,
        handleClose,
        ...props
    }: {
        title: string;
        handleClose?: Function;
    }) => {
        const classes = useStyles();

        return (
            <MuiDialogTitle
                {...props}
                classes={{
                    root: classes.custom_dialog_title_root,
                }}
            >
                <p className="lg:text-xl md:text-lg text-base">{title}</p>
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

const DialogContent = React.memo(
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
                <div className="p-6 flex flex-col">{children}</div>
            </MuiDialogContent>
        );
    }
);

const DialogActions = React.memo(
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

type DialogBoxType = {
    open: boolean;
    children: JSX.Element | JSX.Element[];
    className?: string;
    classesStyles?: object;
    fullHeight?: boolean;
    maxWidth?: any;
    showTitle?: boolean;
    title: string;
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

const DialogBox = React.memo(
    ({
        open,
        children,
        className = "",
        classesStyles = {},
        fullHeight = false,
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
    }: DialogBoxType) => {
        const classes = useStyles();

        const handleOnSubmitFunc = (
            e: React.MouseEvent<HTMLElement, MouseEvent>
        ): void => {
            if (e.type === "click" && onSubmitFunc) {
                onSubmitFunc();
            }
            if (onSubmitClose && handleClose) handleClose();
        };

        let classes_var: { [key: string]: any } = {
            paper: classes.custom_dialog_root,
        };

        if (fullHeight) {
            classes_var = {
                ...classes_var,
                paperScrollPaper: classes.custom_dialog_paperScrollPaper,
            };
        }

        return (
            <>
                <MuiDialog
                    {...props}
                    open={open}
                    maxWidth={maxWidth}
                    onClose={handleClose}
                    sx={{
                        borderRadius: "16px",
                    }}
                    classes={{ ...classes_var, ...classesStyles }}
                    fullWidth={true}
                >
                    {showTitle && (
                        <DialogTitle handleClose={handleClose} title={title} />
                    )}

                    <DialogContent
                        className={classnames(className)}
                        sx={{
                            backgroundColor: "#e5e5e5",
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
