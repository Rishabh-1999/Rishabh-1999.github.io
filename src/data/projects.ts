export interface RepoDetailsType {
    ownerName: string;
    repoName: string;
    branch?: string;
}
export interface ProjectsDataType {
    name: string;
    githubLink: string;
    liveLink?: string;
    category: string[];
    repoDetails: RepoDetailsType;
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
        category: ["React JS", "JAVASCRIPT", "HTML", "Bootstrap", "SCSS"],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "Rishabh-1999.github.io",
        },
    },
    {
        name: "E-Commerce",
        githubLink: "https://github.com/Rishabh-1999/MERN-E-Commerce",
        category: [
            "React JS",
            "JAVASCRIPT",
            "semantic-ui",
            "Mongo DB",
            "HTML",
            "CSS",
        ],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "MERN-E-Commerce",
        },
    },
    {
        name: "COVID19-Tracker",
        githubLink: "https://github.com/Rishabh-1999/COVID19-Tracker-React",
        category: ["React JS", "JAVASCRIPT", "HTML", "Bootstrap", "CSS"],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "COVID19-Tracker-React",
        },
    },
    {
        name: "Community Website",
        githubLink:
            "https://github.com/Rishabh-1999/Community-Website-Web-Project",
        category: [
            "Node JS",
            "Express JS",
            "EJS",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "Community-Website-Web-Project",
        },
    },
    {
        name: "Hospital Management",
        githubLink: "https://github.com/Rishabh-1999/Hospital-Management",
        category: [
            "Node JS",
            "Express JS",
            "EJS",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "Hospital-Management",
        },
    },
    {
        name: "Social-Media",
        githubLink: "https://github.com/Rishabh-1999/Social-Media-NodeJS",
        category: [
            "Node JS",
            "Express JS",
            "EJS-MATE",
            "Mongo DB",
            "HTML",
            "Bootstrap",
            "CSS",
        ],
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "Social-Media-NodeJS",
        },
    },
    {
        name: "Matrimonial Website",
        githubLink: "https://github.com/Rishabh-1999/Matrimonial-Website",
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
        repoDetails: {
            ownerName: "Rishabh-1999",
            repoName: "Matrimonial-Website",
        },
    },
];

export default ProjectsArray;
