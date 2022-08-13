import React from "react";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";
import Button from "components/Button";

/* Images/SVG */
import MyCollegePhoto from "assets/images/me/my-college-photo.png";

function AboutMePage(): React.ReactElement {
    return (
        <section id="about-me_page" className="mx-auto">
            <Heading subtitle={"Who I am ?"} title={"About Me"} />

            <div className="md:mx-auto mx-2 lg:px-4 px-2 pt-4 section_content">
                <div className="flex md:flex-row flex-col">
                    <div className="mx-2 flex flex-col items-center flex-[0.5] left">
                        <img
                            src={MyCollegePhoto}
                            alt="My College Pic"
                            className="rounded-lg h-[375px]"
                        />
                        <div className="mt-4 flex justify-between">
                            <Button
                                type="a"
                                className="mx-2"
                                href="https://drive.google.com/file/d/103xwNIXYzQWXwn6N-sYXvexQJ5wJaYiH"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View CV
                            </Button>

                            <Button
                                type="a"
                                className="mx-2"
                                href="https://drive.google.com/u/0/uc?id=103xwNIXYzQWXwn6N-sYXvexQJ5wJaYiH&export=download"
                                rel="noreferrer"
                                download="RishabhAnand_CV"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                    <div className="md:mt-7 mt-3 md:pr-5 font-architects-daughter flex-1 text-1.5xl text-justify leading-snug right">
                        Well, I'm <span>Rishabh Anand</span>. Currently working
                        as a&nbsp;
                        <span>
                            Software Engineer - I (Full Stack) @ PreScience
                            Decision Solutions.
                        </span>
                        <br />
                        I've been interested in tech since my 8th, when I got my
                        first lesson on HTML. My journey of curiosity and making
                        things more easier and solve through tech started from
                        there. I always wanted to learn how things work around
                        in the background and make something that will change
                        the course of our life, that inspires me a lot. I wanted
                        to work in an environment where we do from scratch by
                        questing everything&nbsp;
                        <span>'why and how should we do'</span>, that constant
                        question of once own idea to make things better, that is
                        what I want to go for, that's why I wanted to work on
                        start-up where we do things from the bottom line and in
                        a matter of time, boom!, a massive product. That is what
                        I want to go for.
                        <br />
                        {/* TODO: Need to write more */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(AboutMePage);
