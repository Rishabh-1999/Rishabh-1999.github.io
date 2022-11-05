/* Assets */
import DashboardPng from "assets/images/dashboard.png";
import BackendPng from "assets/images/backend.png";
import ETLPng from "assets/images/etl.png";
import DeploymentPng from "assets/images/deployment.png";
import MultiPng from "assets/images/multi.png";
// import BotPng from "assets/images/bot.png";

export interface WorkCompanyProjectsType {
    title: string;
    description?: string;
    bgColor: string;
    color: string;
    logo: any;
}

export const WorkCompanyProjectsData: WorkCompanyProjectsType[] = [
    {
        title: "Dashboards",
        bgColor: "linear-gradient(220.55deg, #3793FF 0%, #0017E4 100%)",
        color: "#0017E4",
        logo: DashboardPng,
        description:
            "I create Dashboard/Reports with the focus on visualizing a whole story in a form of tabular and charts to understand and take critical decisions.",
    },
    {
        title: "Backend",
        bgColor: "linear-gradient(220deg, #f7ad04 0%, #ea5512 100%)",
        color: "#f7ad04",
        logo: BackendPng,
    },
    {
        title: "ETL",
        bgColor: "linear-gradient(45deg, #434343 0%, black 100%)",
        color: "#434343",
        logo: ETLPng,
        description:
            "I create custom ETL for client with customizable triggers, with customizable feedbacks, and on the run data validation.",
    },
    {
        title: "Deployment",
        bgColor:
            "linear-gradient( 220deg,rgba(255,251,0,0.4),rgba(255,251,0,0) 50% ),linear-gradient(180deg,rgba(0,0,0,0.21),rgba(0,0,0,0)),linear-gradient(179deg,#32d74b,#1b892b)",
        color: "#1b892b",
        logo: DeploymentPng,
        description:
            "I deploy various applications and services so to provide instant application portability using container based solutions",
    },
    {
        title: "Microservices",
        bgColor: "linear-gradient(135deg, #eb2b59 0%, #8515a1 100%)",
        color: "#eb2b59",
        logo: MultiPng,
    },
    // {
    //     title: "Bot",
    //     bgColor: "linear-gradient(to top, #ecf2f7 0%, white 100%)",
    //     color: "#ecf2f7",
    //     logo: BotPng,
    //     description: "",
    // },
];
