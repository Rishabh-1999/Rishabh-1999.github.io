interface SocialInfo {
    name: string;
    link: string;
}

export interface TestimonialsType {
    name: string;
    subTitle: string;
    testimony: string;
    photo?: string;
    color: string;
    social?: SocialInfo[];
}

const TestimonialsData: TestimonialsType[] = [
    {
        name: "Elon Musk",
        subTitle: "CEO of Tesla",
        testimony: `Rishabh is a very hardworking person. He fits in any position
                whatever task is given to him, he will make it successful. He
                possesses a deep knowledge on development and leadership
                abilities.`,
        photo: "elon",
        color: "#1ec198",
        social: [{ name: "linkedin", link: "" }],
    },
    {
        name: "BG",
        subTitle: "CEO of Tesla",
        testimony: `Rishabh is a very hardworking person. He fits in any position
                whatever task is given to him, he will make it successful. He
                possesses a deep knowledge on development and leadership
                abilities.`,
        photo: "elon",
        color: "#8a5fbb",
        social: [{ name: "linkedin", link: "" }],
    },
    {
        name: "Bhavya",
        subTitle: "CEO of Tesla",
        testimony: `Rishabh is a very hardworking person. He fits in any position
                whatever task is given to him, he will make it successful. He
                possesses a deep knowledge on development and leadership
                abilities.`,
        photo: "elon",
        color: "#58a3f2",
        social: [{ name: "linkedin", link: "" }],
    },
];

export default TestimonialsData;
