import emailjs from "@emailjs/browser";

function SendMail(body: any) {
    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE;
    const publicId = process.env.REACT_APP_EMAIL_PUBLIC_ID;

    if (serviceId && templateId && publicId) {
        emailjs.send(serviceId, templateId, body as any, publicId).then(
            (result) => {
                alert("Sent!, Please wait for my reply");
            },
            (error) => {
                console.error(error.text);
            }
        );
    } else {
        console.error("Email Credential not found failed");
    }
}

export default SendMail;
