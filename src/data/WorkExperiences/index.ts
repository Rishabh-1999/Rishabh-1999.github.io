/*
 * @Owner: Rishabh Anand
 * @Desc: Data - Work Experiences
 */

/* Assets */
import PreScienceLogo from "assets/images/my_jobs/prescience.png";
import AutodeskLogo from "assets/images/my_jobs/autodesk.png";

export interface WorkExperiencesDataType {
  position: string;
  name: string;
  link: string;
  logo: any;
  from: string;
  to?: string;
  descriptions?: (string | string[])[];
  skills?: string[];
}

const WorkExperienceData: WorkExperiencesDataType[] = [
  {
    position: "Software Engineer - II",
    name: "Autodesk",
    link: "https://www.autodesk.com",
    logo: AutodeskLogo,
    from: "2022-12-12",
    descriptions: [""],
    skills: [
      "React",
      "TypeScript",
      "Node JS",
      "JavaScript",
      "GraphQL",
      "Docker",
      "Postgres",
      "Figma",
      "Jira",
      "Git",
    ],
  },
  {
    position: "Full Stack Developer",
    name: "PreScience DS",
    link: "https://www.prescienceds.com",
    logo: PreScienceLogo,
    from: "2021-08-01",
    to: "2022-12-08",
    descriptions: [
      [
        "• Build various custom Dashboard/Report in Web, PDF, and Excel for various Clients like Banks, and B2B.",
        "•	Have developed various REST APIs using Node JS, Spring Boot, and Flask for multiple interfaces under various projects.",
        "•	Have led a team for multiple projects, which has increased the growth of the Company to a new extent.",
        "• Created standardized code structures for writing code, testing, and deployment for React JS, Node JS projects",
        "• Developed various chatbot using ReactJS, Node JS, Socket.io, Google TTS and integrated with Rasa / Dialog flow for various clients",
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
    position: "Full Stack Intern",
    name: "PreScience DS",
    link: "https://www.prescienceds.com/",
    logo: PreScienceLogo,
    from: "2020-06-08",
    to: "2021-07-30",
    descriptions: [
      [
        "• Responsible for design and development of web applications using modern UI design systems with expandable, scalable, and secured backend",
        "• Developed chatbot using ReactJS, Socket.io, and integrated with Rasa",
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

export default WorkExperienceData;
