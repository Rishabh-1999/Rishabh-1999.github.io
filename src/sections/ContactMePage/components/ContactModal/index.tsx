import { memo } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

/* Components */
import { DialogBox } from "components/ModalBox";
import InputBox from "components/InputBox";
import Button from "components/Button";

/* Assets */
import ContactMeHero from "assets/images/contact_me_hero.png";

/* Services */
import SendMail from "services/email";

interface ContactDetails {
    name: string;
    email: string;
    contact_num?: string;
    preferred_contact: string;
    message: string;
}

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Too Short!")
        .max(20, "Too Long!!")
        .required("Required to identify, please"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required for communication"),
    contact_no: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    message: Yup.string()
        .min(2, "Too Short!")
        .max(150, "Too Long!")
        .required("Required"),
});

const initialState: ContactDetails = {
    name: "",
    email: "",
    contact_num: "",
    preferred_contact: "e-mail",
    message: "",
};

type ContactModalProps = {
    openModal: boolean;
    toggleModal: () => void;
};

function ContactModal({ openModal, toggleModal }: ContactModalProps) {
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: ContactSchema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
        enableReinitialize: true,
        onSubmit: () => {},
    });

    const requestToSendMail = () => {
        if (formik.isValid) {
            const form: any = {
                name: formik.values.name,
                user_email: formik.values.email,
                contact_num: formik.values.contact_num,
                message: formik.values.message,
                preferred_contact: formik.values.preferred_contact,
            };

            SendMail(form);
        }
    };

    return (
        <DialogBox
            open={openModal}
            title={"Contact Me"}
            showTitle={false}
            handleClose={toggleModal}
            showActions={false}
        >
            <div className="flex">
                <div className="mb-3 md:px-6 px-3 pt-6 flex-1">
                    <InputBox
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        {...(formik.touched.name && {
                            errorMsg: formik.errors.name,
                        })}
                        onlyValue={true}
                    />
                    <InputBox
                        name="email"
                        label="E-mail"
                        inputType={"email"}
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        {...(formik.touched.email && {
                            errorMsg: formik.errors.email,
                        })}
                        onlyValue={true}
                    />
                    <InputBox
                        name="contact_num"
                        label="Contact No."
                        value={formik.values.contact_num ?? ""}
                        onChange={formik.handleChange("contact_num")}
                        onBlur={formik.handleBlur("contact_num")}
                        {...(formik.touched.contact_num && {
                            errorMsg: formik.errors.contact_num,
                        })}
                        onlyValue={true}
                    />
                    <div className="flex flex-col">
                        <label htmlFor="preferred_contact">
                            Preferred way to Contact
                        </label>
                        <select
                            name="preferred_contact"
                            value={formik.values.preferred_contact}
                            onChange={formik.handleChange("contact_num")}
                            onBlur={formik.handleBlur("preferred_contact")}
                        >
                            <option value={"e-mail"} selected>
                                Email
                            </option>

                            <option value={"phone"}>Phone</option>
                        </select>
                    </div>
                    <InputBox
                        name="message"
                        label="Message"
                        inputType={"textarea"}
                        value={formik.values.message}
                        onChange={formik.handleChange("message")}
                        onBlur={formik.handleBlur("message")}
                        {...(formik.touched.message && {
                            errorMsg: formik.errors.message,
                        })}
                        onlyValue={true}
                    />

                    <Button
                        onClick={requestToSendMail}
                        disabled={!formik.isValid}
                        className="mt-3 mb-2"
                    >
                        Contact Me
                    </Button>
                </div>
                <div className="bg-[#5fc3ca] flex-1 hidden  md:flex justify-center items-center">
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
