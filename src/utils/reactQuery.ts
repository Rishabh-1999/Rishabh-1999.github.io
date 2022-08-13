import {
    useQuery,
    QueryClient,
    QueryClientProvider as QueryClientProviderFromReactQuery,
} from "react-query";

/* Axios */
import { AxiosRequest, AxiosCustomRequestTypeData } from "./axios";
import { AxiosResponse } from "axios";

/* Global */
const client = new QueryClient();

export const QueryClientProvider = QueryClientProviderFromReactQuery;
export const reactQueryClient = client;

function axiosRequest(axiosRequest: AxiosCustomRequestTypeData): Promise<any> {
    return typeof axiosRequest === "undefined"
        ? Promise.reject(new Error("Send Axios Request"))
        : AxiosRequest(axiosRequest).then(
              (response: AxiosResponse) => response.data
          );
}

export function FetchData(
    keys: string | string[],
    axiosRequestData: AxiosCustomRequestTypeData,
    options: any
) {
    return useQuery(keys, () => axiosRequest(axiosRequestData), options);
}
