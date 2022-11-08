import classNames from "classnames";

import { memo, useState, useEffect, ChangeEvent } from "react";

export type InputType = "text" | "number" | "email";
export type InputTypeValues = string | number;

type InputBoxProps = {
    label?: string;
    name: string;
    value: InputTypeValues;
    inputType?: InputType | "textarea";
    className?: string;
    onChange?: (name: string, value: InputTypeValues) => void;
    defaultValue?: InputTypeValues;
};

function InputBox({
    label,
    name,
    value,
    inputType = "text",
    className = "",
    defaultValue = "",
    onChange,
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
            onChange(name, textValue);
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
                    name={name}
                    type={inputType ?? "text"}
                    value={textValue}
                    className="h-8 p-1 min-w-[250px] outline-0 border-gray-700 border rounded-md"
                    onChange={onTextChange}
                />
            ) : (
                <textarea
                    name={name}
                    value={textValue}
                    rows={5}
                    className="min-w-[450px] p-1 outline-0 border-gray-700 border rounded-md"
                    onChange={onTextChange}
                />
            )}
        </div>
    );
}

export default memo(InputBox);
