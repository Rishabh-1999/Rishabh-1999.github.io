import ReactPNG from "../assets/images/techIUse/react.png";
import ReduxPNG from "../assets/images/techIUse/redux.png";
import ReactRouterPNG from "../assets/images/techIUse/react_router.png";
import SassPNG from "../assets/images/techIUse/sass.png";
import JS_PNG from "../assets/images/techIUse/javascript.png";
import TS_PNG from "../assets/images/techIUse/typescript.png";
import JAVA_PNG from "../assets/images/techIUse/java.png";
import PythonPNG from "../assets/images/techIUse/python.png";
import FigmaPNG from "../assets/images/techIUse/figma.png";
import BootstrapPNG from "../assets/images/techIUse/bootstrap.png";
import TailWindPNG from "../assets/images/techIUse/tailwindcss.png";
import MaterialUI_PNG from "../assets/images/techIUse/materialui.png";
import NodeJS_PNG from "../assets/images/techIUse/nodejs.png";
import ExpressPNG from "../assets/images/techIUse/express.png";
import SpringBootPNG from "../assets/images/techIUse/spring-boot.png";
import FlaskPNG from "../assets/images/techIUse/flask.png";
import DockerPNG from "../assets/images/techIUse/docker.png";
import KubernetesPNG from "../assets/images/techIUse/kubernetes.png";
import NginxPNG from "../assets/images/techIUse/nginx.png";
import MySQL_PNG from "../assets/images/techIUse/mysql.png";
import PostgresPNG from "../assets/images/techIUse/postgres.png";
import MongodbPNG from "../assets/images/techIUse/mongodb.png";
import GitPNG from "../assets/images/techIUse/git.png";
import EC2PNG from "../assets/images/techIUse/ec2.png";

export interface TechIUseType {
    title: string;
    image: string;
    rating: number;
    imageHeight?: string | number;
}

const TechIUse: {
    [keys: string]: TechIUseType[];
} = {
    frontEnd: [
        {
            title: "React",
            image: ReactPNG,
            rating: 5,
        },
        {
            title: "Redux",
            image: ReduxPNG,
            rating: 5,
            imageHeight: 112,
        },
        {
            title: "React Router",
            image: ReactRouterPNG,
            rating: 4,
        },
        {
            title: "SASS / CSS",
            image: SassPNG,
            rating: 5,
        },
    ],
    frontEndDesign: [
        {
            title: "Figma",
            image: FigmaPNG,
            rating: 4,
        },
        {
            title: "Material UI",
            image: MaterialUI_PNG,
            rating: 4,
        },
        {
            title: "Bootstrap CSS",
            image: BootstrapPNG,
            rating: 5,
        },
        {
            title: "Tailwind CSS",
            image: TailWindPNG,
            rating: 5,
        },
    ],
    backend: [
        {
            title: "Node JS",
            image: NodeJS_PNG,
            rating: 5,
            imageHeight: 60,
        },
        {
            title: "Express JS",
            image: ExpressPNG,
            rating: 5,
            imageHeight: 60,
        },
        {
            title: "Spring Boot",
            image: SpringBootPNG,
            rating: 4,
            imageHeight: 60,
        },
        {
            title: "Flask",
            image: FlaskPNG,
            rating: 4,
            imageHeight: 60,
        },
    ],
    programmingLanguage: [
        {
            title: "JavaScript",
            image: JS_PNG,
            rating: 5,
        },
        {
            title: "Typescript",
            image: TS_PNG,
            rating: 4,
        },
        {
            title: "Java",
            image: JAVA_PNG,
            rating: 3,
        },
        {
            title: "Python",
            image: PythonPNG,
            rating: 4,
        },
    ],
    devops: [
        {
            title: "Docker",
            image: DockerPNG,
            rating: 5,
        },
        {
            title: "Kubernetes",
            image: KubernetesPNG,
            rating: 3,
        },
        {
            title: "NGINX",
            image: NginxPNG,
            rating: 3,
        },
    ],
    databases: [
        {
            title: "MySQL",
            image: MySQL_PNG,
            rating: 4,
        },
        {
            title: "Postgres",
            image: PostgresPNG,
            rating: 4,
        },
        {
            title: "MongoDB",
            image: MongodbPNG,
            rating: 4,
        },
    ],
    cloud_services: [
        {
            title: "AWS EC2",
            image: EC2PNG,
            rating: 4,
        },
    ],
    versionControl: [
        {
            title: "Git",
            image: GitPNG,
            rating: 5,
            imageHeight: 60,
        },
    ],
};

export default TechIUse;
