"use client";
import { primaryContext } from "@/src/context";
import React, { useContext } from "react";

const Skills = () => {
    const { theme } = useContext(primaryContext);
    return (
        <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
            <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                Senior Software Developer | Public Speaker | Trailblazer |
                Teacher | Sports Lover
            </div>
            <div className="text-sm font-extralight my-5 leading-8">
                <p>
                    As a Senior Software Developer, Public Speaker, Trailblazer,
                    Teacher, and Sports Lover, I bring a unique blend of
                    technical expertise, leadership, innovation, and
                    communication skills to the table. With over 4.5 years of
                    experience in software development, specializing in PHP
                    frameworks like Laravel and frontend technologies like
                    ReactJS, I have a proven track record of building scalable
                    solutions.
                </p>
                <p>
                    Additionally, my passion for public speaking allows me to
                    effectively convey complex ideas and inspire others. As a
                    trailblazer, I thrive on taking initiative and leading by
                    example, while my teaching experience empowers me to mentor
                    and guide aspiring indian future stars. Beyond the screen,
                    I&apos;m an avid sports enthusiast and get satisfaction
                    after at least 2 km running daily, fostering teamwork and
                    resilience both on and off the field.
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
                        Tech Core Skills
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                ReactJs + NextJs
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With over 2.5 years of experience, I excel in
                                ReactJS and Next.js, having developed three
                                personal fully functional complicated(two of
                                them) projects and a pilot project for office
                                use which use by over 50k children, showcasing
                                my expertise in frontend development.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">Javascript</div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With over 4.5 years of experience, I&apos;ve
                                honed my JavaScript skills through extensive
                                project development, including a sophisticated
                                platform utilized by internal teams and
                                government officers. This platform leverages
                                JavaScript for complex UI functionalities,
                                contributing to enhanced educational
                                opportunities for over 2 million children.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                HTML + CSS(Tailwind CSS, Bootstrap, Material UI)
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With over 4.5 years of experience, I&apos;ve
                                mastered HTML and CSS, utilizing frameworks like
                                Tailwind CSS, Bootstrap, and Material UI to
                                create stunning user interfaces. One notable
                                project I&apos;ve developed for government
                                officers and internal teams utilizes Bootstrap
                                4, enhancing UI for improved user experience. I
                                continuously challenge myself to replicate and
                                innovate complex UI designs.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                PHP 7.2 (Laravel 7)
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With over 4.5 years of experience, I excel in
                                PHP Laravel development, crafting robust backend
                                solutions. I&apos;ve spearheaded projects,
                                including a vital platform for internal teams
                                and government officers, facilitating enhanced
                                education for 2 million children. My journey
                                began in PHP, marking a solid foundation for my
                                software development career.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">MySql 7</div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With over 4.5 years of expertise, I&apos;ve
                                proficiently utilized MySQL as the backbone for
                                various projects, including a crucial platform
                                serving government officers and internal teams.
                                This database handles data for 2 million users
                                and other essential features, facilitating
                                improved education for children.
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
                        Tech Other Skills
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                Youtube Data API
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                I&apos;ve demonstrated proficiency in the
                                YouTube Data API by integrating it into a
                                platform for office use. This platform
                                efficiently manages YouTube channels like Rocket
                                Learning Hindi (1906 videos, 14.6k subscribers)
                                and Rocket Learning Marathi (669 videos, 3.31k
                                subscribers), streamlining content management
                                processes.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                D3 Library(Plotly)
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                I&apos;ve demonstrated advanced proficiency in
                                the D3 library by developing dynamic dashboard
                                features for an office project platform. Users
                                can generate multiple customized dashboards with
                                various graphs, created using a fixed set of
                                parameters. This complex, dynamic system,
                                similar to Google Developer Console, aids
                                internal teams and government officers in
                                tracking processes and children&apos;s growth
                                effectively.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                Progressive Web App + GraphQL
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                I&apos;m currently showcasing my expertise in
                                Progressive Web Apps and GraphQL by developing a
                                PWA game aimed at children aged 3 to 8. This
                                engaging game, built with ReactJS (Next.js) and
                                Material UI, utilizes GraphQL and MongoDB for
                                backend functionality. In its pilot phase, the
                                project is successfully engaging 50k children in
                                tier 3 towns, fostering cognitive learning
                                through playful engagement.
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
                        Soft Skills
                    </div>
                    <div className="w-full md:w-4/5 mb-5">
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                Public Speaking & Communication
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With a lifelong passion for public speaking and
                                communication, I&apos;ve actively participated
                                in events since childhood. As a member of
                                multiple social organizations, I&apos;ve
                                successfully organized numerous events,
                                reflecting my adeptness at engaging with diverse
                                audiences.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                Team Builder & Trailblazer
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                As a team builder and trailblazer, I embrace the
                                mantra that success stems from learning through
                                failure. I foster an environment where mistakes
                                are encouraged as opportunities for growth,
                                provided they aren&apos;t repeated. I empower my
                                team to take initiative, believing that trust is
                                paramount for collective success.
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-sm font-bold">
                                Cricketer & Runner
                            </div>
                            <div className="text-xs font-extralight my-2 leading-8">
                                With a background in cricket, having represented
                                the under 16 Rajasthan team, sportsmanship runs
                                deep in my veins. Despite shifting focus post
                                9th grade, I remain dedicated to fitness through
                                running and exercise. My passion for health
                                stems from my father, who prioritizes
                                well-being, inspiring my lifelong commitment to
                                staying active.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
