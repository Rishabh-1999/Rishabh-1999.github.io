/* Utils */
import { FetchData } from "utils";

/* Data / Types */
import { RepoDetailsType } from "data/projects";

const defaultStaleTime = 60 * 60 * 10;

export function getRawReadMeContent(repoUrl: RepoDetailsType) {
    return FetchData(
        ["git", "README", repoUrl.ownerName, repoUrl.repoName],
        {
            method: "get",
            url: `https://raw.githubusercontent.com/${repoUrl.ownerName}/${
                repoUrl.repoName
            }/${repoUrl.branch ?? "master"}/README.md`,
        },
        {
            staleTime: defaultStaleTime,
            refetchOnWindowFocus: false,
        }
    );
}
