import React from "react";

/* Material UI */
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

/* Assets */
import DashboardPng from "assets/images/dashboard.png";
import ETLPng from "assets/images/etl.png";
import DeploymentPng from "assets/images/deployment.png";
import MultiPng from "assets/images/multi.png";

type Props = {};

const WorkCompanyProjectsData = [
    {
        title: "Dashboards",
        bgColor: "linear-gradient(220.55deg, #3793FF 0%, #0017E4 100%)",
        color: "#0017E4",
        logo: DashboardPng,
    },
    {
        title: "Backend",
        bgColor: "linear-gradient(220deg, #f7ad04 0%, #ea5512 100%)",
        color: "#f7ad04",
        logo: ETLPng,
    },
    {
        title: "ETL",
        bgColor: "linear-gradient(45deg, #434343 0%, black 100%)",
        color: "#434343",
        logo: ETLPng,
    },

    {
        title: "Deployment",
        bgColor:
            "linear-gradient( 220deg,rgba(255,251,0,0.4),rgba(255,251,0,0) 50% ),linear-gradient(180deg,rgba(0,0,0,0.21),rgba(0,0,0,0)),linear-gradient(179deg,#32d74b,#1b892b)",
        color: "#1b892b",
        logo: DeploymentPng,
    },
    {
        title: "Multi",
        bgColor: "linear-gradient(135deg, #eb2b59 0%, #8515a1 100%)",
        color: "#eb2b59",
        logo: MultiPng,
    },

    {
        title: "ETL",
        bgColor: "linear-gradient(to top, #ecf2f7 0%, white 100%)",
        color: "#ecf2f7",
        logo: ETLPng,
    },
];

function WorkCompanyProjects({}: Props) {
    const [activeProjects, setActiveProjects] = React.useState(0);

    const handleOnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        setActiveProjects(
            parseInt(
                event.currentTarget.getAttribute("data-project-index") ?? "0"
            )
        );
    };

    const handleOnMouseLeave = () => {
        setActiveProjects(0);
    };

    return (
        <section className="flex p-6 flex-col">
            <div className="my-4 ml-20 flex max-h-40 flex-grow justify-between">
                <div className="flex-grow items-center">
                    <h3 className="text-6xl font-semibold">
                        I make things
                        <span className="text-highlightColor">.</span>
                    </h3>
                    <p className="my-3 w-[425px] text-lg">
                        I'm always looking for new challenges, fancy new
                        technologies, or just exploring the endless world of
                        possibilities.
                    </p>
                </div>
                <div className=" flex justify-center items-center">
                    <ElectricBoltIcon
                        sx={{
                            fontSize: "85px",
                            transform: "skew(-10deg)",
                            transitionDuration: "300ms",
                            ...(activeProjects > 0
                                ? {
                                      color: WorkCompanyProjectsData[
                                          activeProjects - 1
                                      ].color,
                                  }
                                : {}),
                        }}
                    />
                </div>
            </div>
            <div className="ml-20 mb-2 grid max-w-6xls grid-cols-3 gap-6">
                {WorkCompanyProjectsData.map((d, index) => {
                    return (
                        <div
                            className="p-4 h-[205px] hover:scale-105 duration-300 rounded-xl"
                            style={{
                                background: d.bgColor,
                            }}
                            data-project-index={index + 1}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        >
                            <img
                                className="h-[60px]"
                                src={d.logo}
                                alt={d.title}
                            />
                            <h3 className="mt-3 font-bold">{d.title}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default WorkCompanyProjects;
