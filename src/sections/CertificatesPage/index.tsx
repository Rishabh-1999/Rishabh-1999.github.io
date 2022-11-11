import {
    useState,
    useMemo,
    useEffect,
    MouseEvent as ReactMouseEvent,
    ChangeEvent,
} from "react";

/* Animation */
import { motion } from "framer-motion";

/* Style Utils */
import classnames from "classnames";

/* Global Components */
import Heading from "components/Heading";

/* Utils */
import { widths, getWindowDimension } from "utils/window";

/* Data */
import CertificatesArray, { CertificateType } from "data/certificates";

function CertificatesPage() {
    const [width, setWidth] = useState<number>(getWindowDimension());

    const [filterByStack, setFilterByStack] = useState<string>("all");
    const [activeCertificateIndex, setActiveCertificateIndex] =
        useState<number>(0);

    const allStacks = useMemo<string[]>((): string[] => {
        const certificates = new Set<string>();

        CertificatesArray.forEach((certificate: CertificateType): void => {
            certificate?.stack.forEach((stack: string) =>
                certificates.add(stack)
            );
        });

        return Array.from(certificates);
    }, []);

    const filteredCertificates = useMemo<CertificateType[]>(() => {
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

    const selectedCertificate = useMemo<CertificateType>(() => {
        return filteredCertificates[activeCertificateIndex];
    }, [activeCertificateIndex, filteredCertificates]);

    const setWindowSize = (): void => {
        const width: number = getWindowDimension();
        setWidth(width);
    };

    useEffect(() => {
        window.addEventListener("resize", setWindowSize);
        return () => {
            window.removeEventListener("resize", setWindowSize);
        };
    }, []);

    const handleOnClickFilter = (
        event: ReactMouseEvent<HTMLElement, MouseEvent>
    ): void => {
        setFilterByStack(
            event.currentTarget.getAttribute("data-certificate-filter") ?? "all"
        );
        setActiveCertificateIndex(0);
    };

    const handleOnSelectFilter = (
        event: ChangeEvent<HTMLSelectElement>
    ): void => {
        setFilterByStack(event.target.value);
        setActiveCertificateIndex(0);
    };

    return (
        <section id="certificate_page" className="flex flex-col items-center">
            <Heading heading="Certificates" subHeading="Certificates" />

            <div className="max-w-6xl px-4">
                {Array.isArray(allStacks) && (
                    <>
                        {width > widths.mdWidth ? (
                            <motion.div
                                initial={{
                                    y: -100,
                                    opacity: 0.5,
                                }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.75 }}
                                className="mb-2 px-1 py-2 rounded-2xl flex-wrap bg-[var(--layout-primary-color-odd)] flex"
                            >
                                <button
                                    className={classnames(
                                        "mx-0.5 px-1.5 rounded-lg hover:text-gray-600 hover:bg-gray-300 font-bold",
                                        {
                                            "bg-greyScorpion":
                                                filterByStack === "all",
                                        }
                                    )}
                                    data-certificate-filter={"all"}
                                    onClick={handleOnClickFilter}
                                >
                                    All Certificates :
                                </button>

                                {allStacks.map((stack: string) => (
                                    <button
                                        key={stack}
                                        className={classnames(
                                            "mx-0.5 p-1.5 rounded-lg hover:text-gray-600 hover:bg-gray-300",
                                            {
                                                "bg-greyScorpion font-bold":
                                                    filterByStack === stack,
                                            }
                                        )}
                                        data-certificate-filter={stack}
                                        onClick={handleOnClickFilter}
                                    >
                                        {stack}
                                    </button>
                                ))}
                            </motion.div>
                        ) : (
                            <>
                                {Array.isArray(allStacks) && (
                                    <motion.select
                                        initial={{
                                            y: -100,
                                            opacity: 0.5,
                                        }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.75 }}
                                        className="h-9 mb-1.5 p-1 text-lg bg-[var(--layout-primary-color-odd)]"
                                        value={filterByStack}
                                        onChange={handleOnSelectFilter}
                                    >
                                        <option value={"all"}>
                                            Show all Certificates
                                        </option>
                                        {allStacks.map((stack: string) => {
                                            return (
                                                <option
                                                    key={stack}
                                                    value={stack}
                                                >
                                                    {stack}
                                                </option>
                                            );
                                        })}
                                    </motion.select>
                                )}
                            </>
                        )}
                    </>
                )}

                <div className="flex md:flex-row flex-col">
                    <div className="md:mr-4 pr-2 max-h-[450px] md:w-[35%] flex-0 overflow-y-auto active:bg-greyScorpion active:border-b-4 active:border-highlightColor scrollbar scrollbar-thumb-rounded-sm scrollbar-thumb-gray-300">
                        {widths.mdWidth > width ? (
                            <>
                                <select
                                    className="my-1 mb-2 text-ellipsis bg-[var(--layout-primary-color-odd)]"
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
                                            const handleOnClick = (): void =>
                                                setActiveCertificateIndex(
                                                    index
                                                );

                                            return (
                                                <div
                                                    key={certificate.name}
                                                    className={classnames(
                                                        "my-2 mr-1 p-1.5 cursor-pointer rounded-xl hover:bg-gray-700 text-lg font-bold",
                                                        {
                                                            "bg-greyScorpion":
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

                    <motion.div
                        initial={{
                            x: 200,
                            opacity: 0.5,
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        className="w-full flex-1"
                    >
                        <iframe
                            title={selectedCertificate.name}
                            src={selectedCertificate.url}
                            width="100%"
                            className="md:h-[450px] h-[325px]"
                            allowFullScreen={true}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CertificatesPage;
