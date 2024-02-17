// import Image from "next/image";
"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import rocketLearning from "@/public/images/company_logo/rocket_learning_org_logo.jpeg";
import skilrock from "@/public/images/company_logo/skilrock_logo.jpeg";
import ascentCyberSolution from "@/public/images/company_logo/ascentcybersolutions_logo.jpeg";
import cDac from "@/public/images/company_logo/cdac_org_logo.jpeg";
import { primaryContext } from "@/src/context";
import { IoMailOutline } from "react-icons/io5";
import Button from "@/src/components/button";
import { PiBriefcaseLight } from "react-icons/pi";
import articles from "@/public/articles.json";

export default function Home() {
    const { theme } = useContext(primaryContext);

    return (
        <>
            <div className="mt-96 mx-5">
                <div className="text-6xl font-extrabold text-action-text">
                    Senior Frontend Software Engineer
                </div>
                <div className="mx-auto text-lg text-action-text my-8">
                    <p>
                        A results-driven and detail-oriented Senior Frontend
                        Software Engineer with more then 4.5 years of experience
                        in the Ed-tech and Fin-tech industries. I have a strong
                        background as a developer and have a proven track record
                        of delivering high-quality, efficient, and reliable
                        code.{" "}
                        <i className="text-hover">
                            I have developed an ed-tech product with CTO from
                            scratch and now that product helps more than two
                            million children and send more than a lakh of
                            content(text + multimedia) to whatsapp group daily
                            to provide education.
                        </i>
                    </p>
                    <p>
                        Proficient in leveraging React.js and Next.js framework
                        to create highly interactive and dynamic frontend
                        solutions, coupled with expertise in PHP frameworks
                        including CodeIgniter, CakePHP, and Laravel for
                        efficient backend development.
                    </p>
                    <p>
                        l am a team player and have excellent communication
                        skills, making me an asset to any development team. I am
                        excited to continue to grow my skills and take on new
                        challenges as a senior software engineer.
                    </p>
                </div>
                <div className="w-1/2 my-2">
                    <ul className="flex justify-start items-center">
                        <li className="m-4">
                            <Link
                                href={"https://github.com/Mahi0027"}
                                target="_blank"
                            >
                                <FaGithub size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link
                                href={
                                    "https://www.linkedin.com/in/mahipal-singh-rathore-357212146/"
                                }
                                target="_blank"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link
                                href={"mahipal.s.singh27@gmail.com"}
                                target="_blank"
                            >
                                <BiLogoGmail size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link
                                href={"https://mahipalinfo.vercel.app/"}
                                target="_blank"
                            >
                                <CgWebsite size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link
                                href={"https://twitter.com/MahiSin07351356"}
                                target="_blank"
                            >
                                <FaXTwitter size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link
                                href={
                                    "https://www.instagram.com/mahirathore27/"
                                }
                                target="_blank"
                            >
                                <FaInstagram size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap mt-10 mb-24">
                    <div className="show-scrollbar w-full max-h-[36rem] mb-5 md:mb-0  md:w-1/2 px-4 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full">
                        {articles.map(
                            ({
                                id,
                                date,
                                heading,
                                content,
                            }: {
                                id: number;
                                date: string;
                                heading: string;
                                content: string;
                            }) => {
                                return (
                                    <Link key={id} href={`/article/${id}`}>
                                        <div
                                            className={`w-full p-4 rounded-lg ${
                                                theme === "light"
                                                    ? "hover:bg-light-action"
                                                    : "hover:bg-dark-action"
                                            } transition duration-700 ease-in-out hover:cursor-pointer`}
                                        >
                                            <div className="opacity-50 mb-2">
                                                | {date}
                                            </div>
                                            <div className="text-md font-bold mb-2">
                                                {heading}
                                            </div>
                                            <div className="text-sm font-extralight mb-2">
                                                {content}
                                            </div>
                                            <div className="text-hover flex items-center text-sm">
                                                Read Article{" "}
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    aria-hidden="true"
                                                    className="ml-1 h-6 w-6 stroke-current"
                                                >
                                                    <path
                                                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                    </div>

                    <div className="w-full md:w-1/2 px-4">
                        <div
                            className={`border border-spacing-1 rounded-lg p-4 mb-5 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <div className="flex items-center mb-6 font-bold">
                                <PiBriefcaseLight size={25} className="mr-2" />{" "}
                                Work
                            </div>
                            <div className="text-lg font-thin mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <Link
                                        href={"https://www.rocketlearning.org/"}
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
                                                    src={rocketLearning}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    Rocket Learning
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    Senior Software Engineer
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="text-xs font-extralight">
                                        04/2022 — Present
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <Link
                                        href={"https://www.rocketlearning.org/"}
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
                                                    src={rocketLearning}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    Rocket Learning
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    Software Engineer
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="text-xs font-extralight">
                                        07/2020 — 03/2022
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <Link
                                        href={"https://www.skilrock.com/"}
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
                                                    src={skilrock}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    Skilrock Technology
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    Software Engineer Trainee
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="text-xs font-extralight">
                                        07/2019 — 05/2020
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <Link
                                        href={
                                            "https://www.ascentcybersolutions.com/"
                                        }
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
                                                    src={ascentCyberSolution}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    Ascent Cyber Solution
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    PHP Developer
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="text-xs font-extralight">
                                        06/2018 — 07/2018
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  mb-3">
                                    <Link
                                        href={"https://www.netcomedu.in/"}
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
                                                    src={cDac}
                                                    width={30}
                                                    height={30}
                                                    alt={"company logo"}
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <div className="text-base font-bold">
                                                    C-DAC
                                                </div>
                                                <div className="opacity-70 text-sm">
                                                    Trainee
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="text-xs font-extralight">
                                        06/2017 — 07/2017
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
                        <div
                            className={`border border-spacing-1 rounded-lg p-4 mb-5 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <div className="flex items-center mb-6 font-bold">
                                <IoMailOutline size={25} className="mr-2" />{" "}
                                Stay up to date
                            </div>
                            <div className="text-sm font-thin">
                                Get notified when I publish something new, and
                                unsubscribe at any time.
                            </div>
                            <div className="flex justify-between mt-5">
                                <input
                                    type="text"
                                    className={`w-full mr-5 p-2 bg-transparent rounded-lg border border-spacing-1 ${
                                        theme === "light"
                                            ? "border-light-border"
                                            : "border-dark-border"
                                    }`}
                                    placeholder="Email address"
                                    required={true}
                                />
                                <Button
                                    label="Join"
                                    type="button"
                                    className={`p-2 font-extrabold rounded-lg border border-spacing-1 ${
                                        theme === "light"
                                            ? "border-dark-border bg-dark-background text-dark-text "
                                            : "border-light-border bg-light-background text-light-text"
                                    } hover:scale-105 transition duration-700 ease-in-out`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
