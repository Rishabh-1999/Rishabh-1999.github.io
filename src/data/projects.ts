export interface ProjectsDataType {
    name: string;
    githubLink: string;
    LiveLink: string;
    category: string[];
}

export const CategoryArray: string[] = [
    "All",
    "React JS",
    "Node JS",
    "Mongo DB",
];

const ProjectsArray: ProjectsDataType[] = [
    {
        name: "Portfolio Website",
        githubLink: "https://github.com/Rishabh-1999/Rishabh-1999.github.io",
        LiveLink: "",
        category: ["React JS", "JAVASCRIPT", "HTML", "Bootstrap", "SCSS"],
    },
    {
        name: "E-Commerce",
        githubLink: "https://github.com/Rishabh-1999/MERN-E-Commerce",
        LiveLink: "",
        category: [
            "React JS",
            "JAVASCRIPT",
            "semantic-ui",
            "Mongo DB",
            "HTML",
            "CSS",
        ],
    },
    {
        name: "COVID19-Tracker",
        githubLink: "https://github.com/Rishabh-1999/COVID19-Tracker-React",
        LiveLink: "",
        category: ["React JS", "JAVASCRIPT", "HTML", "Bootstrap", "CSS"],
    },
    {
        name: "Community Website",
        githubLink:
            "https://github.com/Rishabh-1999/Community-Website-Web-Project",
        LiveLink: "",
        category: [
            "Node JS",
            "Express JS",
            "EJS",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
    },
    {
        name: "Hospital Management",
        githubLink: "https://github.com/Rishabh-1999/Hospital-Management",
        LiveLink: "",
        category: [
            "Node JS",
            "Express JS",
            "EJS",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
    },
    {
        name: "Social-Media",
        githubLink: "https://github.com/Rishabh-1999/Social-Media-NodeJS",
        LiveLink: "",
        category: [
            "Node JS",
            "Express JS",
            "EJS-MATE",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
    },
    {
        name: "Matrimonial Website",
        githubLink: "https://github.com/Rishabh-1999/Matrimonial-Website",
        LiveLink: "",
        category: [
            "Node JS",
            "Recommendation System",
            "Express JS",
            "EJS-MATE",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
    },
];

export default ProjectsArray;
