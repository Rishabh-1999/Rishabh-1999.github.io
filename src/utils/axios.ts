import React from "react";

import Axios, { AxiosPromise } from "axios";

export interface AxiosCustomRequestTypeData {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: object;
}

const AxiosCustomRequest = ({
    method = "get",
    url,
    ...props
}: AxiosCustomRequestTypeData): AxiosPromise => {
    return Axios({
        method: method,
        url: url,
        ...props,
    });
};

export const useAbortController = () => {
    const axiosSource: React.MutableRefObject<AbortController | null> =
        React.useRef(null);

    const newAbortController = React.useCallback((): AbortController => {
        const controller = new AbortController();
        axiosSource.current = controller;

        return axiosSource.current;
    }, []);

    React.useEffect(
        () => () => {
            if (axiosSource.current) axiosSource.current.abort();
        },
        []
    );

    return newAbortController;
};

export const axios = Axios;

// eslint-disable-next-line
export const AxiosRequest = AxiosCustomRequest;
