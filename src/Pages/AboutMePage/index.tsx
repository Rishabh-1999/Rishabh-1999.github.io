import React from "react";

/* Styles */
import "./index.scss";

/* Global Components */
import Button from "components/Button";
import Heading from "components/Heading";

/* Images/SVG */
import MyCollegePhoto from "assets/images/me/my-college-photo.png";

function AboutMePage() {
    return (
        <section id="about_me_page" className="mx-auto px-4 pt-4">
            <Heading subtitle={"Who I am ?"} title={"About Me"} />
            <div className="section_content mx-2 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="flex flex-col md:flex-row">
                    <div className="left mx-6 flex flex-col items-center">
                        <img
                            src={MyCollegePhoto}
                            alt="My College Pic"
                            className="rounded-lg"
                        />
                        <div className="mt-3">
                            <Button
                                type="a"
                                className="m-2"
                                href="https://drive.google.com/file/d/103xwNIXYzQWXwn6N-sYXvexQJ5wJaYiH"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View CV
                            </Button>

                            <Button
                                type="a"
                                className="m-2"
                                href="https://drive.google.com/u/0/uc?id=103xwNIXYzQWXwn6N-sYXvexQJ5wJaYiH&export=download"
                                rel="noreferrer"
                                download="RishabhAnand_CV"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                    <div className="right mt-3 sm:pr-4 pr-0 text-justify leading-snug">
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

export default AboutMePage;
