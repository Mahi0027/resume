"use client";
import { primaryContext } from "@/src/context";
import React, { useContext } from "react";

const Activities = () => {
    const { theme } = useContext(primaryContext);
    return (
        <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
            <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                Event Management | Team Builder | Proactive | Sports Lover
            </div>
            <div className="text-sm font-extralight my-5 leading-8">
                <p>
                    With a focus on event management and team building, I am a
                    proactive individual who is passionate about sports. From
                    school days, I have consistently engaged in extracurricular
                    activities, honing my skills and fostering a collaborative
                    spirit. My commitment to excellence drives me to excel in
                    every endeavor I undertake.
                </p>
            </div>
            <div>
                <div
                    className={`flex flex-wrap md:border-l md:border-spacing-1 p-3 my-10 ${
                        theme === "light"
                            ? "md:border-light-border"
                            : "md:border-dark-border"
                    }`}
                >
                    <div className="w-full md:w-1/5 mb-5 flex justify-start items-start text-sm/3 font-semibold">
                        Achievements
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                In Current Organization ( Rocket Learning )
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                <ul className="list-disc">
                                    <li>
                                        As the inaugural team member to join
                                        Rocket Learning following the CTO, I
                                        spearheaded the development of our
                                        flagship product from inception to
                                        fruition, achieving a user base
                                        exceeding one million within a mere 1.5
                                        years, predominantly comprising parents
                                        seeking educational solutions.
                                    </li>
                                    <li>
                                        Instrumental in the development of
                                        intricate functionalities such as fully
                                        customizable dashboards, seamless
                                        YouTube integration, dynamic certificate
                                        generation, and dynamic form creation
                                        akin to Google Forms within the present
                                        organization, largely autonomously.
                                        Additionally, adeptly crafted
                                        educational worksheets.
                                    </li>
                                    <li>
                                        Developed progressive web application
                                        (PWA) gaming modules tailored for
                                        children aged 3 to 8, meticulously
                                        designed to engage and educate. Ensuring
                                        tailored educational experiences and
                                        fostering continuous improvement.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">Personal</div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                <ul className="list-disc">
                                    <li>
                                        Active member in various impactful
                                        social organizations, fostering
                                        community engagement.
                                    </li>
                                    <li>
                                        Leading a small NGO, dedicated to
                                        empowering rural children through
                                        educational initiatives and
                                        opportunities.
                                    </li>
                                    <li>
                                        Represented district cricket team
                                        2009-2011, honored to be part of
                                        Rajasthan&apos;s under-16 cricket squad.
                                    </li>
                                    <li>
                                        Served as Kho-kho school team captain
                                        from 2008-2010 and team player from
                                        2004-2007.
                                    </li>
                                    <li>
                                        Achieved 3rd place at state level in
                                        science project competition in 2008,
                                        showcasing expertise and innovation.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex flex-wrap md:border-l md:border-spacing-1 p-3 my-10 ${
                        theme === "light"
                            ? "md:border-light-border"
                            : "md:border-dark-border"
                    }`}
                >
                    <div className="w-full md:w-1/5 mb-5 flex justify-start items-start text-sm/3 font-semibold">
                        Activities
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                In Current Organization ( Rocket Learning )
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                <ul className="list-disc">
                                    <li>
                                        Played a direct role in finalizing
                                        products at Rocket Learning,
                                        contributing expertise to refinement
                                        processes.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">In College</div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                <ul className="list-disc">
                                    <li>
                                        Served as Student Coordinator in the
                                        Training and Placement Office (TPO) at
                                        MBM Engineering College.
                                    </li>
                                    <li>
                                        Served as Head Coordinator of the Webbed
                                        Club at MBM Engineering College,
                                        overseeing various web development
                                        initiatives and activities.
                                    </li>
                                    <li>
                                        Engaged member of MBM Engineering
                                        College&apos;s Singing Club, fostering
                                        artistic expression and community
                                        involvement.
                                    </li>
                                    <li>
                                        Engaged in chess, cricket, and ramp-walk
                                        competitions, securing victories, while
                                        also spearheading numerous event
                                        organizing endeavors with adept
                                        leadership.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex flex-wrap md:border-l md:border-spacing-1 p-3 my-10 ${
                        theme === "light"
                            ? "md:border-light-border"
                            : "md:border-dark-border"
                    }`}
                >
                    <div className="w-full md:w-1/5 mb-5 flex justify-start items-start text-sm/3 font-semibold">
                        Interests
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-xs font-extralight my-2 leading-8">
                                <ul className="list-disc">
                                    <li>Public speaking.</li>
                                    <li>
                                        Engage diverse individuals, embracing
                                        learning opportunities from varied
                                        experiences collaboratively.
                                    </li>
                                    <li>
                                        Eager to oversee diverse activities and
                                        projects with enthusiasm.
                                    </li>
                                    <li>Singing, Sports lover.</li>
                                    <li>
                                        Cricket, Badminton, Running, Cycling.
                                    </li>
                                    <li>Reading books.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
