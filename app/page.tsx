// import Image from "next/image";
"use client";

import Link from "next/link";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import companyLogo1 from "@/public/images/company_logo/1.svg";
import companyLogo2 from "@/public/images/company_logo/2.svg";
import companyLogo3 from "@/public/images/company_logo/3.svg";
import companyLogo4 from "@/public/images/company_logo/4.svg";
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
                    Senior Software Engineer
                </div>
                <div className="mx-auto text-lg text-action-text my-8">
                    I am a senior software engineer with 4.5 years of experience
                    in the Ed-tech and Fin-tech industries. I have a strong
                    background as a developer and have a proven track record of
                    delivering high-quality, efficient, and reliable code. I
                    have developed an ed-tech product with CTO from scratch and
                    now that product helps more than a million children daily. l
                    am a team player and have excellent communication skills,
                    making me an asset to any development team. I am excited to
                    continue to grow my skills and take on new challenges as a
                    senior software engineer.
                </div>
                <div className="w-1/2 my-2">
                    <ul className="flex justify-start items-center">
                        <li className="m-4">
                            <Link href={"#"}>
                                <FaGithub size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link href={"#"}>
                                <FaLinkedin size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link href={"#"}>
                                <BiLogoGmail size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link href={"#"}>
                                <FaInstagram size={20} />
                            </Link>
                        </li>
                        <li className="m-4">
                            <Link href={"#"}>
                                <CgWebsite size={20} />
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
                                                src={companyLogo1}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Planetaria
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                CEO
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        2019 — Present
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
                                                src={companyLogo2}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Airbnb
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                Product Designer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        2014 — 2019
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
                                                src={companyLogo3}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Facebook
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                iOS Software Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        2011 — 2014
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
                                                src={companyLogo4}
                                                width={30}
                                                height={30}
                                                alt={"company logo"}
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <div className="text-base font-bold">
                                                Starbucks
                                            </div>
                                            <div className="opacity-70 text-sm">
                                                Shift Supervisor
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-extralight">
                                        2008 — 2011
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
