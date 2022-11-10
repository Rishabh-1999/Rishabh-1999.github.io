import { memo, useState, useEffect, ChangeEvent } from "react";

/* Styling Utils */
import classNames from "classnames";

export type InputType = "text" | "number" | "email";
export type InputTypeValues = string | number;

type InputBoxProps = {
    label?: string;
    name: string;
    value: InputTypeValues;
    inputType?: InputType | "textarea";
    className?: string;
    onChange?: Function;
    defaultValue?: InputTypeValues;
    onBlur?: Function;
    errorMsg?: string;
    onlyValue?: boolean;
};

function InputBox({
    label,
    name,
    value,
    inputType = "text",
    className = "",
    defaultValue = "",
    onChange,
    onBlur,
    errorMsg,
    onlyValue = false,
    ...props
}: InputBoxProps) {
    const [textValue, setTextValue] = useState<InputTypeValues>(
        value ?? defaultValue ?? ""
    );

    const onTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTextValue(e.target.value as InputType);
    };

    useEffect(() => {
        if (onChange) {
            if (onlyValue) onChange(name, textValue);
            onChange(textValue);
        }
        // eslint-disable-next-line
    }, [textValue]);

    return (
        <div className={classNames("my-1 flex", className, "flex-col")}>
            {label && (
                <>
                    <label htmlFor={name} className="font-bold">
                        {label} :
                    </label>
                </>
            )}
            {inputType !== "textarea" ? (
                <input
                    {...props}
                    name={name}
                    type={inputType ?? "text"}
                    value={textValue}
                    onChange={onTextChange}
                    onBlur={onBlur as React.FocusEventHandler<HTMLInputElement>}
                />
            ) : (
                <textarea
                    {...props}
                    name={name}
                    value={textValue}
                    rows={5}
                    onChange={onTextChange}
                    onBlur={
                        onBlur as React.FocusEventHandler<HTMLTextAreaElement>
                    }
                />
            )}
            {errorMsg && <div className="text-red-600 text-sm">{errorMsg}</div>}
        </div>
    );
}

export default memo(InputBox);
