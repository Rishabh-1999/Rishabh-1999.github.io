import React_logo from "../assets/images/techiuse/react.png";
import Redux_logo from "../assets/images/techiuse/redux.jpeg";
import React_Router_logo from "../assets/images/techiuse/react_router.png";
import NPM_logo from "../assets/images/techiuse/npm.png";
import HTML_logo from "../assets/images/techiuse/html.png";
import CSS_logo from "../assets/images/techiuse/css.png";
import SASS_logo from "../assets/images/techiuse/sass.png";
import JS_logo from "../assets/images/techiuse/javascript.png";
import Bootstrap_logo from "../assets/images/techiuse/bootstrap.png";
import TailWindCSS_logo from "../assets/images/techiuse/tailwindcss.png";
import MaterialUI_logo from "../assets/images/techiuse/materialui.png";
import NodeJS_logo from "../assets/images/techiuse/nodejs.png";
import Express_logo from "../assets/images/techiuse/express.png";
import SpringBoot_logo from "../assets/images/techiuse/spring-boot.png";
import Nginx_logo from "../assets/images/techiuse/nginx.png";
import Mongodb_logo from "../assets/images/techiuse/mongodb.png";
import MySQL_logo from "../assets/images/techiuse/mysql.png";
import Git_logo from "../assets/images/techiuse/git.png";
import EC2_logo from "../assets/images/techiuse/ec2.png";

export const mapper = ["Basic", "Intermediate", "Advance", "Expert"];

export interface TechIUseType {
    title: string;
    src: string;
    rating: number;
}

const TechIUse = {
    react: [
        {
            title: "React",
            src: React_logo,
            rating: 3,
        },
        {
            title: "Redux",
            src: Redux_logo,
            rating: 3,
        },
        {
            title: "React Router",
            src: React_Router_logo,
            rating: 3,
        },
        {
            title: "SASS",
            src: SASS_logo,
            rating: 3,
        },
        {
            title: "Material UI",
            src: MaterialUI_logo,
            rating: 3,
        },
        {
            title: "NPM",
            src: NPM_logo,
            rating: 3,
        },
    ],
    frontend: [
        {
            title: "HTML5",
            src: HTML_logo,
            rating: 4,
        },
        {
            title: "CSS",
            src: CSS_logo,
            rating: 3,
        },

        {
            title: "JavaScript",
            src: JS_logo,
            rating: 3,
        },
        {
            title: "Bootstrap",
            src: Bootstrap_logo,
            rating: 3,
        },
        {
            title: "TailWindCSS",
            src: TailWindCSS_logo,
            rating: 3,
        },
    ],
    backend: [
        {
            title: "Node JS",
            src: NodeJS_logo,
            rating: 3,
        },
        {
            title: "Express JS",
            src: Express_logo,
            rating: 3,
        },
        {
            title: "Spring Boot",
            src: SpringBoot_logo,
            rating: 1,
        },
    ],
    devops: [
        {
            title: "NGINX",
            src: Nginx_logo,
            rating: 2,
        },
    ],
    databases: [
        {
            title: "MongoDB",
            src: Mongodb_logo,
            rating: 3,
        },
        {
            title: "MS SQL",
            src: MySQL_logo,
            rating: 3,
        },
    ],
    cloud_services: [
        {
            title: "AWS EC2",
            src: EC2_logo,
            rating: 2,
        },
    ],
    versionControl: [
        {
            title: "Git",
            src: Git_logo,
            rating: 3,
        },
    ],
};

export default TechIUse;
