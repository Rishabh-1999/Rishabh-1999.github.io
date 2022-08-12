import React from "react";

import classnames from "classnames";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Images/SVG */
import gitHubSVG from "assets/images/github.png";
import liveSVG from "assets/svg/live.min.svg";

/* Data */
import ProjectsArray, { ProjectsDataType, CategoryArray } from "data/projects";

function ProjectsViewer({ selectedFiltered }: { selectedFiltered: string }) {
    const filteredProject = React.useMemo(() => {
        let temp_projects = ProjectsArray;

        if (selectedFiltered !== "All")
            temp_projects = temp_projects.filter((temp) => {
                if (temp.category)
                    return temp.category.includes(selectedFiltered);
                return false;
            });

        return temp_projects;
        // eslint-disable-next-line
    }, [ProjectsArray]);

    return (
        <div className="flex flex-wrap justify-center">
            {Array.isArray(filteredProject) &&
                filteredProject.map((temp: ProjectsDataType) => {
                    return (
                        <div
                            key={temp.name}
                            className="m-3 p-3 rounded-3xl drop-shadow-lg flex flex-col projects_card"
                        >
                            <h4 className="underline">{temp.name}</h4>
                            <div className="projects_page__card__content">
                                <div className="m-2 mb-3 flex justify-around">
                                    {temp.githubLink && (
                                        <img
                                            src={gitHubSVG}
                                            alt="github"
                                            className="mr-2"
                                        />
                                    )}
                                    {temp.LiveLink && (
                                        <span>
                                            <img
                                                src={liveSVG}
                                                alt="Live"
                                                className="mr-2"
                                            />
                                            See Live
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                {temp.category.map((temp__category) => (
                                    <div
                                        key={temp__category}
                                        className="badge my-2 mx-1 py-1 px-2"
                                    >
                                        <p className="mb-0">{temp__category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

function ProjectsPage() {
    const [selectedFiltered, setSelectedFiltered] = React.useState("All");

    return (
        <section id="projects_page" className="m-2 p-2 pt-6">
            <Heading title={"Projects"} subtitle={"Knowledge Factory"} />

            <div className="section_content lg:mt-6 mx-2 mb-4 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="container mx-auto px-4">
                    <div className="mb-2 pb-2 border-white border-style-solid border-b flex justify-center projects_page__category">
                        {Array.isArray(CategoryArray) &&
                            CategoryArray.map((category: string) => (
                                <div
                                    key={category}
                                    className={classnames(
                                        "mx-2 py-1 px-4 text-lg font-bold hover:text-orange-anzac",
                                        {
                                            "active bg-grey-scorpion rounded-xl":
                                                selectedFiltered === category,
                                        }
                                    )}
                                    onClick={() =>
                                        setSelectedFiltered(category)
                                    }
                                >
                                    {category}
                                </div>
                            ))}
                    </div>
                    <ProjectsViewer selectedFiltered={selectedFiltered} />
                </div>
            </div>
        </section>
    );
}

export default React.memo(ProjectsPage);
