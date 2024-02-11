"use client";
import Image from "next/image";
import React, { useContext } from "react";
import companyLogo1 from "@/public/images/company_logo/1.svg";
import companyLogo2 from "@/public/images/company_logo/2.svg";
import companyLogo3 from "@/public/images/company_logo/3.svg";
import companyLogo4 from "@/public/images/company_logo/4.svg";
import { primaryContext } from "@/src/context";
import { BsLink45Deg } from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
    const { theme } = useContext(primaryContext);

    return (
        <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
            <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                Software I use, gadgets I love, and other things I recommend.
            </div>
            <div className="text-sm font-extralight my-5 leading-8">
                <p>
                    I’ve loved making things for as long as I can remember, and
                    wrote my first program when I was 6 years old, just two
                    weeks after my mom brought home the brand new Macintosh LC
                    550 that I taught myself to type on.
                </p>
            </div>
            <div className="flex flex-wrap justify-center">
                <Link
                    href={"https://github.com/Mahi0027"}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                    target="_blank"
                >
                    <div className="flex justify-start items-center mb-5">
                        <div
                            className={`border border-spacing-1 rounded-full p-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <Image
                                className={`object-cover rounded-full`}
                                loading="lazy"
                                src={companyLogo4}
                                width={40}
                                height={40}
                                alt={"company logo"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-xs font-bold">
                            16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </div>
                        <div className="text-xs/3 font-extralight my-2 leading-normal">
                            I was using an Intel-based 16” MacBook Pro prior to
                            this and the difference is night and day.
                        </div>
                    </div>
                    <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                        <BsLink45Deg size={20} className="mr-5" /> github.com
                    </div>
                </Link>
                <Link
                    href={"https://github.com/Mahi0027"}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                    target="_blank"
                >
                    <div className="flex justify-start items-center mb-5">
                        <div
                            className={`border border-spacing-1 rounded-full p-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <Image
                                className={`object-cover rounded-full`}
                                loading="lazy"
                                src={companyLogo4}
                                width={40}
                                height={40}
                                alt={"company logo"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-xs font-bold">
                            16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </div>
                        <div className="text-xs/3 font-extralight my-2 leading-normal">
                            I was using an Intel-based 16” MacBook Pro prior to
                            this and the difference is night and day. I was
                            using an Intel-based 16” MacBook Pro prior to this
                            and the difference is night and day.
                        </div>
                    </div>
                    <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                        <BsLink45Deg size={20} className="mr-5" /> github.com
                    </div>
                </Link>
                <Link
                    href={"https://github.com/Mahi0027"}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                    target="_blank"
                >
                    <div className="flex justify-start items-center mb-5">
                        <div
                            className={`border border-spacing-1 rounded-full p-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <Image
                                className={`object-cover rounded-full`}
                                loading="lazy"
                                src={companyLogo4}
                                width={40}
                                height={40}
                                alt={"company logo"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-xs font-bold">
                            16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </div>
                        <div className="text-xs/3 font-extralight my-2 leading-normal">
                            I was using an Intel-based 16” MacBook Pro prior to
                            this and the difference is night and day. I was
                            using an Intel-based 16” MacBook Pro prior to this
                            and the difference is night and day.
                        </div>
                    </div>
                    <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                        <BsLink45Deg size={20} className="mr-5" /> github.com
                    </div>
                </Link>
                <Link
                    href={"https://github.com/Mahi0027"}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                    target="_blank"
                >
                    <div className="flex justify-start items-center mb-5">
                        <div
                            className={`border border-spacing-1 rounded-full p-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <Image
                                className={`object-cover rounded-full`}
                                loading="lazy"
                                src={companyLogo4}
                                width={40}
                                height={40}
                                alt={"company logo"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-xs font-bold">
                            16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </div>
                        <div className="text-xs/3 font-extralight my-2 leading-normal">
                            I was using an Intel-based 16” MacBook Pro prior to
                            this and the difference is night and day. I was
                            using an Intel-based 16” MacBook Pro prior to this
                            and the difference is night and day.
                        </div>
                    </div>
                    <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                        <BsLink45Deg size={20} className="mr-5" /> github.com
                    </div>
                </Link>
                <Link
                    href={"https://github.com/Mahi0027"}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                    target="_blank"
                >
                    <div className="flex justify-start items-center mb-5">
                        <div
                            className={`border border-spacing-1 rounded-full p-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <Image
                                className={`object-cover rounded-full`}
                                loading="lazy"
                                src={companyLogo4}
                                width={40}
                                height={40}
                                alt={"company logo"}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-xs font-bold">
                            16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </div>
                        <div className="text-xs/3 font-extralight my-2 leading-normal">
                            I was using an Intel-based 16” MacBook Pro prior to
                            this and the difference is night and day. I was
                            using an Intel-based 16” MacBook Pro prior to this
                            and the difference is night and day.
                        </div>
                    </div>
                    <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                        <BsLink45Deg size={20} className="mr-5" /> github.com
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
