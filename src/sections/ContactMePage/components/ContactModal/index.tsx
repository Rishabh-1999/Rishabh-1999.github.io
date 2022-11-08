import { memo, useReducer } from "react";

/* Components */
import { DialogBox } from "components/ModalBox";
import InputBox, { InputTypeValues } from "components/InputBox";
import Button from "components/Button";

/* Assets */
import ContactMeHero from "assets/images/contact_me_hero.png";

type ContactModalProps = {
    openModal: boolean;
    toggleModal: () => void;
};

interface ContactDetails {
    name: string;
    email: string;
    contact_num: string;
    message: string;
}

function contactReducer(state: ContactDetails, action: any) {
    switch (action.type) {
        case "update": {
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        }

        default:
            return state;
    }
}

const initialState: ContactDetails = {
    name: "",
    email: "",
    contact_num: "",
    message: "",
};

function ContactModal({ openModal, toggleModal }: ContactModalProps) {
    const [state, dispatch] = useReducer(contactReducer, initialState);
    const { name, email, contact_num, message } = state;

    const updateToState = (name: string, value: InputTypeValues) => {
        dispatch({
            type: "update",
            fieldName: name,
            payload: value,
        });
    };

    return (
        <DialogBox
            open={openModal}
            title={"Contact"}
            showTitle={false}
            handleClose={toggleModal}
            showActions={false}
        >
            <div className="flex">
                <div className="p-6 flex-1">
                    <InputBox
                        value={name}
                        name="name"
                        label="*Name"
                        onChange={updateToState}
                    />
                    <InputBox
                        value={email}
                        name="email"
                        label="*E-mail"
                        inputType={"email"}
                        onChange={updateToState}
                    />
                    <InputBox
                        value={contact_num}
                        name="contact_num"
                        label="Contact No."
                        onChange={updateToState}
                    />
                    <div className="flex flex-col">
                        <p>Preferred way to Contact</p>
                        <select>
                            <option value={"e-mail"} selected>
                                Email
                            </option>
                            <option value={"phone-no"}>Phone No</option>
                        </select>
                    </div>
                    <InputBox
                        value={message}
                        name="message"
                        label="*Message"
                        inputType={"textarea"}
                        onChange={updateToState}
                    />

                    <Button>Contact Me</Button>
                </div>
                <div className="flex-1 flex justify-center items-center bg-[#5fc3ca]">
                    <img
                        src={ContactMeHero}
                        alt="contact me"
                        className="object-cover w-56"
                    />
                </div>
            </div>
        </DialogBox>
    );
}

export default memo(ContactModal);
