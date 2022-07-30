import React from "react";

/* Style Utils */
import classnames from "classnames";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Utils */
import { md_width, getWindowDimension } from "utils/windowSize";

/* Data */
import CertificateArray, { CertificateType } from "data/certificates";

function CertificatePage() {
    const [filterSelected, setFilter] = React.useState<string>("all");
    const filteredCertificates = React.useMemo<CertificateType[]>(() => {
        if (filterSelected === "all") {
            return CertificateArray;
        } else {
            return CertificateArray.filter(
                (certificate) =>
                    certificate.stack &&
                    certificate.stack.includes(filterSelected)
            );
        }
    }, [filterSelected]);

    const [activeCertificateIndex, setActiveCertificateIndex] =
        React.useState<number>(0);
    const selectedCertificate = React.useMemo<CertificateType>(() => {
        return CertificateArray[activeCertificateIndex];
    }, [activeCertificateIndex]);

    const allStacks = React.useMemo<string[]>((): string[] => {
        const certificates = new Set<string>();

        CertificateArray.forEach((certificate: CertificateType): void => {
            certificate?.stack.forEach((stack: string) =>
                certificates.add(stack)
            );
        });

        return Array.from(certificates);
    }, []);

    const [width, setWidth] = React.useState<number>(getWindowDimension());

    const setWindowSize = (): void => {
        const width: number = getWindowDimension();
        setWidth(width);
    };

    React.useEffect(() => {
        window.addEventListener("resize", setWindowSize);
        return () => {
            window.removeEventListener("resize", setWindowSize);
        };
    }, []);

    const handleSelect = (e: {
        target: { value: React.SetStateAction<string> };
    }): void => {
        setFilter(e.target.value);
    };

    return (
        <section id="certificate_page" className="px-4 pt-4">
            <Heading title={"Certificates"} subtitle={"Certificates Earned"} />
            <div className="section_content mx-2 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="container">
                    <>
                        {Array.isArray(allStacks) && (
                            <select onChange={handleSelect}>
                                <option value={"all"}>
                                    Show all Certificates
                                </option>
                                {allStacks.map((stack: string) => {
                                    return (
                                        <option key={stack} value={stack}>
                                            {stack}
                                        </option>
                                    );
                                })}
                            </select>
                        )}
                    </>

                    <div className="flex md:flex-row flex-col">
                        <div className="certificate_list flex-0 overflow-y-auto md:mr-6">
                            {md_width > width ? (
                                <>
                                    <select
                                        className="w-11/12 text-ellipsis"
                                        onChange={(e) =>
                                            setActiveCertificateIndex(
                                                parseInt(e.target.value)
                                            )
                                        }
                                    >
                                        {Array.isArray(filteredCertificates) &&
                                            filteredCertificates.map(
                                                (
                                                    certificate: CertificateType,
                                                    index: number
                                                ) => {
                                                    return (
                                                        <option
                                                            key={
                                                                certificate.name
                                                            }
                                                            value={index}
                                                        >
                                                            {certificate.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                    </select>
                                </>
                            ) : (
                                <>
                                    {Array.isArray(filteredCertificates) &&
                                        filteredCertificates.map(
                                            (
                                                certificate: CertificateType,
                                                index: number
                                            ) => {
                                                const handleOnClick =
                                                    (): void =>
                                                        setActiveCertificateIndex(
                                                            index
                                                        );

                                                return (
                                                    <div
                                                        key={certificate.name}
                                                        className={classnames(
                                                            "my-2 p-1.5 cursor-pointer hover:rounded-md nav-link text-lg font-bold",
                                                            {
                                                                "active rounded-t-md":
                                                                    index ===
                                                                    activeCertificateIndex,
                                                            }
                                                        )}
                                                        onClick={handleOnClick}
                                                    >
                                                        {certificate.name}
                                                    </div>
                                                );
                                            }
                                        )}
                                </>
                            )}
                        </div>

                        <div className="certificate-iframe flex-1">
                            <div className="tab-pane fade show active">
                                <iframe
                                    title={selectedCertificate.name}
                                    src={selectedCertificate.url}
                                    width="100%"
                                    allowFullScreen={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(CertificatePage);
