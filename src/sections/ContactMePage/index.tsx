import React from "react";

/* Components */
import Heading from "components/Heading";
import Button from "components/Button";

function ContactMePage() {
    return (
        <section id="contact-me" className="flex flex-col items-center">
            <Heading heading="Contact Me" subHeading="Have a Chat ?" />
            <div className="max-w-4xl py-4 px-6 bg-gray-300 text-black flex-grow flex flex-col items-center rounded-md">
                <h3 className="mb-4 text-center text-3xl font-bold underline tracking-wid">
                    Get In Touch
                </h3>
                <p>
                    Although I'm not actively looking for any new opportunities
                    , my inbox is always open for idea & opinions. Whether you
                    have any questions or say 'Hi', I will try my best yo get
                    back to you.
                </p>
                <Button className="my-4">Contact Me</Button>
            </div>
        </section>
    );
}

export default ContactMePage;
