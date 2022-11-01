import React from "react";

/* Components */
import Heading from "components/Heading";

/* Images/SVG */
import MemoJi from "assets/images/memoji-alt.png";
import HiEmoji from "assets/images/emoji.png";

function AboutMePage() {
    return (
        <section
            id="about_me"
            className="flex flex-col justify-center items-center"
        >
            <Heading heading="About Me" subHeading="Who I am ?" />

            <div className="max-w-6xl m-6 px-6 min-h-[450px] h-full flex-1 bg-white rounded-3xl flex items-center justify-between">
                <div className="lg:max-w-[60%] flex-1 text-black font-medium text-xl text-justify right">
                    <h1 className="font-bold mb-3 text-[1.3rem]">
                        <img
                            src={HiEmoji}
                            alt="Hi"
                            className="w-11 mb-2 -ml-1"
                        />
                        Hi, I am Rishabh Anand, a full-stack developer from
                        India
                    </h1>
                    <h2 className="text-lg">
                        Currently working as a&nbsp; Full Stack developer @
                        <span>PreScience Decision Solutions</span>
                        <br />I build modern web application tools and service
                        from scratch, with focus on user experience and with a
                        blend on solving problem in an optimal way.
                    </h2>
                </div>

                <div className="mx-2 flex flex-col">
                    <img
                        src={MemoJi}
                        alt="My College Pic"
                        className="rounded-lg h-[325px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMePage;
