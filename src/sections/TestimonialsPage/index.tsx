import { memo } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { SocialIcon } from "react-social-icons";

/* Styling Utils */
import classNames from "classnames";

/* Components */
import Heading from "components/Heading";

/* Assets */
import Elon from "assets/images/elon.webp";

/* Data */
import TestimonialsData, { TestimonialsType } from "data/testimonials";

const WaveSVG = ({
    color,
    className,
}: {
    color: string;
    className: string;
}) => {
    return (
        <svg
            width="450"
            height="119"
            viewBox="0 0 450 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 26.4431L18.5993 18.7792C37.7153 11.1152 74.9139 -4.21267 112.629 1.09314C149.828 6.39895 187.543 31.7489 225.258 47.0768C262.457 62.4047 300.172 67.7105 337.371 62.4047C375.086 57.6884 412.285 42.3605 431.401 34.1071L450 26.4431V119H431.401C412.285 119 375.086 119 337.371 119C300.172 119 262.457 119 225.258 119C187.543 119 149.828 119 112.629 119C74.9139 119 37.7153 119 18.5993 119H0V26.4431Z"
                fill={color}
            />
        </svg>
    );
};

const TestimonialCard = ({
    name,
    subTitle,
    testimony,
    social,
    color,
}: TestimonialsType) => {
    return (
        <div className="w-[425px] h-[400px] z-10 relative m-2 overflow-hidden rounded-xl bg-white text-gray-700 flex-shrink-0 flex flex-col">
            <div
                className="px-4 z-20 absolute top-3 text-7xl font-secondaryFont"
                style={{
                    color: color,
                }}
            >
                “
            </div>
            <div className="mt-14 mb-20 z-10 pl-12 pr-4 flex-shrink-0 flex-grow-1">
                {testimony}
            </div>
            <div
                className={classNames(
                    "mt-6 relative flex-shrink-0 flex-grow-1 flex flex-col justify-center items-center"
                )}
                style={{
                    background: color,
                }}
            >
                <img
                    className="w-24 h-24 absolute z-40 left-[41%] -top-[84px] border-4 border-zinc-200 object-cover rounded-full"
                    src={Elon}
                    alt={name}
                    style={{
                        width: "6rem",
                    }}
                />
                <WaveSVG
                    className="absolute z-20 left-0 right-0 -top-20 object-cover"
                    color={color}
                />
                <div className="mt-6 mb-2 z-30 flex flex-col text-white justify-center items-center">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-sm">{subTitle}</div>
                    {social?.map((temp) => (
                        <SocialIcon
                            url={temp.link}
                            rel="noreferrer"
                            target="_blank"
                            fgColor={"white"}
                            network={temp.name}
                            bgColor={"transparent"}
                            label={temp.name}
                            className="mt-2"
                            style={{
                                width: "40px",
                                height: "40px",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

function Testimonials() {
    return (
        <section id="testimonials" className="flex flex-col items-center">
            <Heading
                heading={"Testimonials"}
                subHeading={"What People said about Me"}
            />

            <Carousel
                className="max-w-5xl w-full flex flex-col justify-center items-center"
                centerMode={true}
                centerSlidePercentage={48}
                showStatus={false}
                showIndicators={true}
                showThumbs={true}
                showArrows={true}
            >
                {TestimonialsData.map((testimonial) => {
                    return (
                        <TestimonialCard
                            key={testimonial.name}
                            {...testimonial}
                        />
                    );
                })}
            </Carousel>
        </section>
    );
}

export default memo(Testimonials);
