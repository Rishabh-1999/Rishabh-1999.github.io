/* Assets */
import PreScienceLogo from "assets/images/prescience.png";
import AutodeskLogo from "assets/images/autodesk.png";

export interface WorkExperiencesDataType {
    position: string;
    companyName: string;
    companyLink: string;
    logo: any;
    from: string;
    to?: string;
    currently?: boolean;
    descriptions?: (string | string[])[];
    skills?: string[];
}

const WorkExperiences: WorkExperiencesDataType[] = [
    {
        position: "Software Engineer - II (Full-Stack)",
        companyName: "Autodesk",
        companyLink: "https://www.autodesk.com/",
        logo: AutodeskLogo,
        from: "Dec 2022",
        currently: true,
        descriptions: [
        ],
        skills: [
            "React",
            "Node JS",
            "GraphQL",
            "JavaScript",
            "TypeScript",
            "Docker",
            "Postgres",
            "Figma",
            "Jira",
            "Git",
        ],
    },
    {
        position: "Software Engineer - I (Full-Stack)",
        companyName: "PreScience Decision Solutions",
        companyLink: "https://www.prescienceds.com",
        logo: PreScienceLogo,
        from: "June 2021",
        to: "Dec 2022",
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
        from: "June 2021",
        to: "July 2022",
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

export default WorkExperiences;
