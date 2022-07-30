import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import gitHubSVG from "assets/svg/github.min.svg";
import liveSVG from "assets/svg/live.min.svg";

/* Data */
import ProjectsArray, { CategoryArray } from "data/projects";

function ProjectsViewer({ active }: { active: string }) {
    const selected_projects_array =
        active === "All"
            ? ProjectsArray.slice(0, 6)
            : ProjectsArray.filter((temp) => {
                  if (temp.category) {
                      return temp.category.includes(active);
                  }
                  return false;
              });

    return (
        <div className="flex flex-wrap justify-center projects_page__card__container">
            {selected_projects_array.map((temp) => {
                return (
                    <div
                        key={temp.name}
                        className="projects_page__card m-2 p-3 flex flex-col drop-shadow-lg"
                    >
                        <h4>
                            <u>{temp.name}</u>
                        </h4>
                        <div className="projects_page__card__content">
                            <div className="m-2 mb-3 flex justify-around">
                                {temp.githubLink && (
                                    <span>
                                        <img
                                            src={gitHubSVG}
                                            alt="github"
                                            className="mr-2"
                                        />
                                        GitHub
                                    </span>
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
    const [active, setActive] = React.useState("All");

    return (
        <section id="projects_page" className="m-2 p-2 pt-6">
            <div className="projects_page__header text-center">
                <h4 className="text-orange-anzac m-0">Knowledge Factor</h4>
                <h1 className="font-extrabold">
                    <u>Projects</u>
                </h1>
            </div>
            <div className="projects_page__main mt-4 mt-xl-5">
                <div className="container mx-auto px-4">
                    <div className="projects_page__category hidden md:flex justify-center mb-2 border-white border-style-solid border-b pb-2">
                        {CategoryArray.map((category, i) => {
                            return (
                                <div
                                    key={category}
                                    className={
                                        active === category
                                            ? "mx-2 p-1 px-4 active rounded-pill"
                                            : "mx-2 p-1 px-4"
                                    }
                                    onClick={() => setActive(category)}
                                >
                                    <h4 className="mb-0">{category}</h4>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <ProjectsViewer active={active} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(ProjectsPage);
