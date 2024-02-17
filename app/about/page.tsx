"use client";
import React, { useContext } from "react";
import portfolio from "@/public/profile/portrait.webp";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { primaryContext } from "@/src/context";
import { FaCodepen } from "react-icons/fa6";
import Button from "@/src/components/button";
import mbmCollege from "@/public/images/company_logo/mbm_engineering_college_logo.jpeg";
import school from "@/public/images/company_logo/school_logo.png";

const About = () => {
    const { theme } = useContext(primaryContext);

    return (
        <>
            <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:grid-rows-[auto-1fr] md:gap-y-12">
                    <div className="md:pl-10 flex justify-center items-center">
                        <Image
                            className={`object-cover rounded-lg`} /* transform rotate-6 */
                            loading="lazy"
                            src={portfolio}
                            alt={"article"}
                        />
                    </div>
                    <div className="md:order-first md:row-span-2">
                        <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                            I’m Mahipal Singh. Senior Software Engineer, Public
                            Speaker, Learner, Educator
                        </div>
                        <div className="text-sm font-extralight my-5 leading-8">
                            <p>
                                I am a seasoned professional with a diverse
                                skill set and a passion for leveraging
                                technology to drive impactful solutions. With a
                                Bachelor&apos;s degree in Information
                                Technology, I has honed my expertise over the
                                span of 4.5 years as a software developer. My
                                commitment to excellence is underscored by my
                                achievements, both on and off the field. As a
                                former state-level under 16 cricket player, I
                                exhibits discipline, teamwork, and a competitive
                                spirit.
                            </p>
                            <p>
                                In addition to my sporting achievements, I also
                                recognized as a proficient public speaker and
                                actively contributes to various social
                                organizations, showcasing my leadership and
                                communication abilities beyond the realm of
                                technology. Notably, my professional journey has
                                been marked by significant contributions,
                                particularly during my tenure at Rocket
                                Learning. As one of the pioneering members of
                                the tech team, I played a pivotal role in
                                building a product from inception, started from
                                tree member in tech team(CTO, me(platform
                                developer),backend developer) to build product
                                from scratch, which now serves over 2 million
                                children daily. My efforts have been
                                instrumental in propelling Rocket Learning into
                                a $3 millions company.
                            </p>
                            <p>
                                My technical prowess spans a wide array of
                                technologies including PHP frameworks like
                                Laravel, CakePHP, and CodeIgniter, alongside
                                modern JavaScript libraries such as ReactJS
                                (Next.js). My proficiency extends to frontend
                                frameworks like Tailwind CSS, Material UI, and
                                Bootstrap, as well as databases like MySQL,
                                MongoDB, and GraphQL. Beyond my professional
                                endeavors, My passion for coding is evident
                                through my numerous personal projects developed
                                on ReactJS, showcasing my creativity and
                                dedication to continuous learning.
                            </p>
                            <p>
                                In summary, I epitomizes a multifaceted
                                professional, excelling not only in my technical
                                domain but also as a leader, athlete, and
                                community contributor. My blend of skills,
                                experience, and dedication makes me an
                                invaluable asset in any professional setting.
                            </p>
                        </div>
                    </div>
                    <div className="md:pl-10">
                        <div
                            className={`border border-spacing-1 rounded-lg p-4 mb-5 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <div className="flex items-center mb-6 font-bold">
                                <FaCodepen size={25} className="mr-2" />{" "}
                                Education
                            </div>
                            <div className="text-lg font-thin mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <Link
                                        href={"https://mbm.ac.in/"}
                                        target="_blank"
                                    >
                                        <div
                                            className={`flex justify-start items-center`}
                                        >
                                            <div
                                                className={`border border-spacing-0.5 rounded-full p-1 ${
                                                    theme === "light"
                                                        ? "border-light-border"
                                                        : "border-dark-border"
                                                }`}
                                            >
                                                <Image
                                                    className={`object-cover rounded-full`}
                                                    loading="lazy"
                                                    src={mbmCollege}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    B.E. in Information
                                                    Technology
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    MBM Engineering
                                                    College,Jodhpur(Raj.)
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    CGPA: 7.07
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="text-xs font-extralight">
                                        08/2015 — 06/2019
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <div
                                        className={`flex justify-start items-center`}
                                    >
                                        <div
                                            className={`border border-spacing-0.5 rounded-full p-1 ${
                                                theme === "light"
                                                    ? "border-light-border"
                                                    : "border-dark-border"
                                            }`}
                                        >
                                            <Image
                                                className={`object-cover rounded-full`}
                                                loading="lazy"
                                                src={school}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Senior Secondary
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                Vidya Bharti Sr. Sec. School
                                                Jalore
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                84.40%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        05/2011 — 04/2013
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <div
                                        className={`flex justify-start items-center`}
                                    >
                                        <div
                                            className={`border border-spacing-0.5 rounded-full p-1 ${
                                                theme === "light"
                                                    ? "border-light-border"
                                                    : "border-dark-border"
                                            }`}
                                        >
                                            <Image
                                                className={`object-cover rounded-full`}
                                                loading="lazy"
                                                src={school}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Secondary
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                Adharsh Vidya Mandir Sec. School
                                                Jalore
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                86.67%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        07/2000 — 04/2011
                                    </div>
                                </div>
                            </div>
                            <a href={"/files/resume.pdf"} download>
                                <Button
                                    label="Download CV"
                                    type="button"
                                    className={`w-full p-2 font-thin rounded-lg border border-spacing-1 ${
                                        theme === "light"
                                            ? "border-light-border bg-light-action text-light-text "
                                            : "border-dark-border bg-dark-action text-dark-text"
                                    } hover:scale-105 transition duration-700 ease-in-out`}
                                />
                            </a>
                        </div>
                    </div>
                    {/* <div className="md:pl-20">
                        <ul
                            role="list"
                            className="flex-col justify-start items-center"
                        >
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <FaGithub
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />{" "}
                                    GitHub
                                </Link>
                            </li>
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <FaLinkedin
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />
                                    LinkedIn
                                </Link>
                            </li>
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <BiLogoGmail
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />
                                    Gmail
                                </Link>
                            </li>
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <CgWebsite
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />
                                    Website
                                </Link>
                            </li>
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <FaXTwitter
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />
                                    X(Twitter)
                                </Link>
                            </li>
                            <li className="m-4">
                                <Link
                                    href={"#"}
                                    className="flex justify-start items-center hover:text-hover transition duration-500 ease-in-out"
                                >
                                    <FaInstagram
                                        size={20}
                                        className="mr-5 md:mr-8 lg:mr-10"
                                    />
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default About;
