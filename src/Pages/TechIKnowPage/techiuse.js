import React_logo from "../../Assets/Images/techiuse/react.png";
import Redux_logo from "../../Assets/Images/techiuse/redux.jpeg";
import React_Router_logo from "../../Assets/Images/techiuse/react_router.png";
import NPM_logo from "../../Assets/Images/techiuse/npm.png";
import HTML_logo from "../../Assets/Images/techiuse/html.png";
import CSS_logo from "../../Assets/Images/techiuse/css.png";
import SASS_logo from "../../Assets/Images/techiuse/sass.png";
import JS_logo from "../../Assets/Images/techiuse/javascript.png";
import Bootstrap_logo from "../../Assets/Images/techiuse/bootstrap.png";
import TailWindCSS_logo from "../../Assets/Images/techiuse/tailwindcss.png";
import MaterialUI_logo from "../../Assets/Images/techiuse/materialui.png";
import NodeJS_logo from "../../Assets/Images/techiuse/nodejs.png";
import Express_logo from "../../Assets/Images/techiuse/express.png";
import SpringBoot_logo from "../../Assets/Images/techiuse/spring-boot.png";
import Nginx_logo from "../../Assets/Images/techiuse/nginx.png";
import Mongodb_logo from "../../Assets/Images/techiuse/mongodb.png";
import MySQL_logo from "../../Assets/Images/techiuse/mysql.png";
import Git_logo from "../../Assets/Images/techiuse/git.png";
import EC2_logo from "../../Assets/Images/techiuse/ec2.png";

const mapper = ["Basic", "Intermediate", "Advance", "Expert"];

const data = {
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

export { data, mapper };
