import PreScienceLogo from "assets/images/prescience.png";

export interface WorkExperiencesDataType {
    position: string;
    companyName: string;
    companyLink: string;
    logo: any;
    from: string;
    to?: string;
    descriptions?: (string | string[])[];
    skills?: string[];
}

export const experienceData: WorkExperiencesDataType[] = [
    {
        position: "Full-Stack Developer",
        companyName: "PreScience Decision Solutions",
        companyLink: "https://www.prescienceds.com",
        logo: PreScienceLogo,
        from: "2021-08-01",
        descriptions: [
            [
                "• Build various custom Dashboard/Report in Web, PDF, and Excel for various Clients like Banks, and B2B.",
                "•	Have developed various REST APIs using Node JS, Spring Boot, and Flask for multiple interfaces under various projects.",
                "•	Have led a team for multiple projects, which has increased the growth of the Company to a new extent.",
                "• Created standardized code structures for writing code, testing, and deployment for React JS, Node JS projects",
                "• Developed various chatbots using ReactJS, Node JS, Socket.io, Google TTS and integrated with Rasa / Dialog flow for various clients",
                "• Responsible for managing VM(s) and deploying various applications using containers",
                "• Developed custom-made WordPress Plugins using ReactJS for various Clients",
                "• Interacted with various clients for various projects as a project lead/manager",
                "• Built innovative React library page builder which creates a page visually by dragging only",
            ],
            "Apart from my responsibilities, I am responsible for guiding other juniors in the design and development of web applications projects.",
        ],
        skills: [
            "React",
            "Node JS",
            "JavaScript",
            "TypeScript",
            "Docker",
            "Flask",
            "Python",
            "Spring",
            "Java",
            "MySQL",
            "Postgres",
            "Figma",
            "Git",
        ],
    },
    {
        position: "Full-stack Intern",
        companyName: "PreScience Decision Solutions",
        companyLink: "https://www.prescienceds.com/",
        logo: PreScienceLogo,
        from: "2020-06-08",
        to: "2021-07-30",
        descriptions: [
            [
                "• Responsible for design and development of web applications using modern UI design systems with expandable, scalable, and secured backend",
                "• Developed chatbots using ReactJS, Socket.io, and integrated with Rasa",
                "• Responsible for managing VM(s) and deploying various applications using containers",
                "• Modified existing applications to detect and correct errors, improve performance, and upgrade interfaces.",
            ],
        ],
        skills: [
            "React",
            "Node JS",
            "JavaScript",
            "Docker",
            "MySQL",
            "Figma",
            "Git",
        ],
    },
];
