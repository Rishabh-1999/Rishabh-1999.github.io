import { useState } from "react";

/* Global Components */
import Heading from "components/Heading";
import Button from "components/Button";

/* Components */
import ContactModal from "./components/ContactModal";

function ContactMePage() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleModal = (): void => {
        setOpenModal((oldValue) => !oldValue);
    };

    return (
        <section id="contact-me" className="flex flex-col items-center">
            <Heading heading="Contact Me" subHeading="Have a Chat ?" />

            <div className="max-w-4xl mx-4 p-6 rounded-md bg-gray-200 text-black flex-grow flex flex-col items-center">
                <h3 className="mb-4 text-center text-3xl font-bold underline tracking-wide font-headingFont">
                    Get In Touch
                </h3>
                <p>
                    Although I'm not actively looking for any new opportunities
                    , my inbox is always open for idea & opinions. Whether you
                    have any questions or say 'Hi', I will try my best yo get
                    back to you.
                </p>
                <Button className="my-4" onClick={toggleModal}>
                    Contact Me
                </Button>
            </div>

            <ContactModal openModal={openModal} toggleModal={toggleModal} />
        </section>
    );
}

export default ContactMePage;
