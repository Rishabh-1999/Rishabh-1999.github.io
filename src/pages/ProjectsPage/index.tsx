import React from "react";

import classnames from "classnames";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Assets */
import gitHubSVG from "assets/images/github.png";
import liveSVG from "assets/svg/live.min.svg";
import { ReactComponent as LaunchLink } from "assets/svg/launch-link.svg";
import { ReactComponent as Return } from "assets/svg/keyboard_return.svg";

/* Utils */
// import { FetchData } from "utils";
import MarkdownUtils from "utils/markdownUtils";

/* Services */
import { getRawReadMeContent } from "services/readMe";

/* Data / Types */
import ProjectsArray, { ProjectsDataType, CategoryArray } from "data/projects";

const Badge = React.memo(
    ({ title, className = "" }: { title: string; className?: string }) => {
        return (
            <div className={classnames("m-1 py-1 px-2 rounded-xl", className)}>
                {title}
            </div>
        );
    }
);

function ProjectViewer({
    selectedProject,
    handleSelectedProject,
}: {
    selectedProject: ProjectsDataType;
    handleSelectedProject: Function;
}) {
    const {
        isFetching,
        isSuccess,
        data: readMeMarkdown,
    } = getRawReadMeContent(selectedProject.repoDetails);

    return (
        <>
            <div
                className="text-2xl rounded-t-xl flex items-center hover:text-orange-anzac font-bold bg-blue-tuna border-b border-solid border-gray-700"
                onClick={() => handleSelectedProject()}
            >
                <Return className="ml-2 mr-3 h-10 w-10" />
                Back
            </div>
            <div className="pt-2 px-4 h-[550px] rounded-b-xl flex flex-row flex-wrap justify-center bg-blue-tuna">
                <div className="w-[300px] mr-2 pr-1 border-r-2 border-solid border-light-blue-tuna">
                    <div className="mb-3 text-2xl underline font-bold">
                        {selectedProject.name}
                    </div>
                    <div className="mb-2 flex">
                        <p className="font-bold text-lg">Repo: &nbsp;</p>
                        <a
                            className="flex items-center"
                            href={selectedProject.githubLink}
                            target="blank"
                            rel="noreferrer"
                        >
                            {selectedProject.name}
                            <LaunchLink className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                    {selectedProject.liveLink && (
                        <div className="mb-2 flex">
                            <p className="font-bold text-lg">
                                Live Link: &nbsp;
                            </p>
                            <a
                                className="flex items-center"
                                href={selectedProject.liveLink}
                                target="blank"
                                rel="noreferrer"
                            >
                                Go to live link
                                <img
                                    src={liveSVG}
                                    alt={"Live"}
                                    className="ml-2 w-5 h-5"
                                />
                            </a>
                        </div>
                    )}
                    <div className="mb-2 flex flex-col">
                        <p className="font-bold text-lg">Stacks: &nbsp;</p>
                        <div className="flex flex-wrap">
                            {Array.isArray(selectedProject.category) &&
                                selectedProject.category.map((stack) => (
                                    <Badge
                                        key={stack}
                                        title={stack}
                                        className="bg-grey-scorpion"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="ml-2 flex-1 flex-grow">
                    <p className="text-2xl font-bold">README:</p>
                    {isFetching ? (
                        <div className="text-xl">Loading</div>
                    ) : (
                        <>
                            {isSuccess && readMeMarkdown && (
                                <MarkdownUtils content={readMeMarkdown} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

function AllProjectsViewer({
    selectedFiltered,
    handleSelectedProject,
}: {
    selectedFiltered: string;
    handleSelectedProject: Function;
}) {
    const filteredProject = React.useMemo(() => {
        let temp_projects = ProjectsArray;

        if (selectedFiltered !== "All") {
            temp_projects = temp_projects.filter((temp) => {
                if (temp.category)
                    return temp.category.includes(selectedFiltered);
                return false;
            });
        }

        return temp_projects;
        // eslint-disable-next-line
    }, [ProjectsArray, selectedFiltered]);

    return (
        <div className="flex flex-wrap justify-center">
            {Array.isArray(filteredProject) &&
                filteredProject.map((temp: ProjectsDataType) => {
                    return (
                        <div
                            key={temp.name}
                            className="w-[385px] min-h-[235px] m-2 px-2 pt-2 pb-1 rounded-2xl drop-shadow-md border-neutral-800 hover:border-grey-scorpion border-2 border-solid flex flex-col bg-blue-tuna hover:scale-[1.03]"
                            onClick={() => handleSelectedProject(temp)}
                        >
                            <h4 className="underline text-xl font-semibold">
                                {temp.name}
                            </h4>

                            <div className="m-2 flex justify-center items-center">
                                {temp.githubLink && (
                                    <img
                                        src={gitHubSVG}
                                        alt="github"
                                        className="mr-2 w-[75px]"
                                    />
                                )}
                                {temp.liveLink && (
                                    <a
                                        href={temp.liveLink}
                                        className="w-[45px] "
                                    >
                                        <img src={liveSVG} alt="Live" />
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap">
                                {temp.category.map((stack) => (
                                    <Badge
                                        key={stack}
                                        title={stack}
                                        className="bg-light-blue-tuna"
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

function ProjectsPage(): React.ReactElement {
    const [selectedFiltered, setSelectedFiltered] =
        React.useState<string>("All");
    const [selectedProject, setSelectedProject] = React.useState<
        ProjectsDataType | undefined
    >();

    return (
        <section id="projects_page">
            <Heading title={"Projects"} subtitle={"Knowledge Factory"} />

            <div className="mt-6 md:mx-auto mx-2 md:px-6 sm:px-4 px-2 section_content">
                <div className="container px-4">
                    <div className="mb-2 pb-2 border-white border-style-solid border-b flex justify-center">
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
                                    onClick={() => {
                                        console.log(category);
                                        setSelectedFiltered(category);
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                    </div>
                    {selectedProject ? (
                        <ProjectViewer
                            selectedProject={selectedProject}
                            handleSelectedProject={setSelectedProject}
                        />
                    ) : (
                        <AllProjectsViewer
                            selectedFiltered={selectedFiltered}
                            handleSelectedProject={setSelectedProject}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default React.memo(ProjectsPage);
