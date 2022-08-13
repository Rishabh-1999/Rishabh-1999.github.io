import React from "react";

/* Style Utils */
import classnames from "classnames";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Utils */
import { widths, getWindowDimension } from "utils";

/* Data */
import CertificatesArray, { CertificateType } from "data/certificates";

function CertificatePage() {
    const [width, setWidth] = React.useState<number>(getWindowDimension());

    const [filterByStack, setFilterByStack] = React.useState<string>("all");
    const [activeCertificateIndex, setActiveCertificateIndex] =
        React.useState<number>(0);

    const allStacks = React.useMemo<string[]>((): string[] => {
        const certificates = new Set<string>();

        CertificatesArray.forEach((certificate: CertificateType): void => {
            certificate?.stack.forEach((stack: string) =>
                certificates.add(stack)
            );
        });

        return Array.from(certificates);
    }, []);

    const filteredCertificates = React.useMemo<CertificateType[]>(() => {
        if (filterByStack === "all") {
            return CertificatesArray;
        } else {
            return CertificatesArray.filter(
                (certificate) =>
                    certificate.stack &&
                    certificate.stack.includes(filterByStack)
            );
        }
    }, [filterByStack]);

    const selectedCertificate = React.useMemo<CertificateType>(() => {
        return filteredCertificates[activeCertificateIndex];
    }, [activeCertificateIndex, filteredCertificates]);

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

    const handleSelect = (stack: string): void => {
        setFilterByStack(stack);
        setActiveCertificateIndex(0);
    };

    return (
        <section id="certificate_page">
            <Heading title={"Certificates"} subtitle={"Certificates Earned"} />

            <div className="mt-4 md:mx-6 sm:mx-4 px-2 pt-4 section_content">
                <div className="container">
                    <>
                        {Array.isArray(allStacks) && (
                            <>
                                {width > widths.mdWidth ? (
                                    <div className="mb-2 flex flex-wrap">
                                        <button
                                            className={classnames(
                                                "stack_select font-bold",
                                                {
                                                    active:
                                                        filterByStack === "all",
                                                }
                                            )}
                                            onClick={() => handleSelect("all")}
                                        >
                                            Show all Certificates :
                                        </button>
                                        {allStacks.map((stack: string) => (
                                            <button
                                                key={stack}
                                                className={classnames(
                                                    "stack_select",
                                                    {
                                                        active:
                                                            filterByStack ===
                                                            stack,
                                                    }
                                                )}
                                                onClick={() =>
                                                    handleSelect(stack)
                                                }
                                            >
                                                {stack}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        {Array.isArray(allStacks) && (
                                            <select
                                                onChange={(e): void =>
                                                    handleSelect(e.target.value)
                                                }
                                            >
                                                <option value={"all"}>
                                                    Show all Certificates
                                                </option>
                                                {allStacks.map(
                                                    (stack: string) => {
                                                        return (
                                                            <option
                                                                key={stack}
                                                                value={stack}
                                                            >
                                                                {stack}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </select>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>

                    <div className="flex md:flex-row flex-col">
                        <div className="md:mr-4 flex-0 overflow-y-auto certificate_list">
                            {widths.mdWidth > width ? (
                                <>
                                    <select
                                        className="w-11/12 text-ellipsis"
                                        onChange={(e): void =>
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
                                                ) => (
                                                    <option
                                                        key={certificate.name}
                                                        value={index}
                                                    >
                                                        {certificate.name}
                                                    </option>
                                                )
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
                                                            "my-2 p-1.5 cursor-pointer hover:rounded-md hover:bg-grey-scorpion text-lg font-bold",
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

                        <div className="flex-1 certificate-iframe">
                            <div className="show active">
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
