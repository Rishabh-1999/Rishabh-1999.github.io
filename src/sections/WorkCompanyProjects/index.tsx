import React from "react";

/* Material UI */
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

/* Data */
import { WorkCompanyProjectsData } from "data/workCompanyProjects";

function WorkCompanyProjects() {
    const [activeProjects, setActiveProjects] = React.useState<number>(0);

    const handleOnMouseEnter = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        setActiveProjects(
            parseInt(
                event.currentTarget.getAttribute("data-project-index") ?? "0"
            )
        );
    };

    const handleOnMouseLeave = (): void => {
        setActiveProjects(0);
    };

    return (
        <section className="md:px-6 py-4 flex flex-col ">
            <div className="max-h-40 md:mx-0 mx-4 my-4 md:ml-20 flex flex-grow justify-between">
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
                <div className="md:flex hidden justify-center items-center">
                    <ElectricBoltIcon
                        sx={{
                            fontSize: "85px",
                            transitionProperty: "color",
                            transitionDuration: "500ms",
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

            <div className="md:mx-0 mx-6 md:ml-20 grid md:grid-cols-3 gap-5">
                {WorkCompanyProjectsData.map((projects, index) => {
                    return (
                        <div
                            className="px-3 py-4 min-h-[190px] hover:shadow-lg hover:scale-105 duration-300 rounded-xl"
                            style={{
                                background: projects.bgColor,
                            }}
                            data-project-index={index + 1}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        >
                            <img
                                className="h-[55px]"
                                src={projects.logo}
                                alt={projects.title}
                            />
                            <h3 className="mt-2 font-bold tracking-wide">
                                {projects.title}
                            </h3>
                            <h5 className="leading-snug">
                                {projects.description}
                            </h5>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default WorkCompanyProjects;
