"use client";
import Image from "next/image";
import React, { useContext } from "react";
import companyLogo4 from "@/public/images/company_logo/rocket_learning_org_logo.jpeg";
import clock from "@/public/images/projects/clock.png";
import buddyChat from "@/public/images/projects/buddyChat.png";
import resume from "@/public/profile/favicon.ico";
import mbm from "@/public/images/company_logo/mbm_engineering_college_logo.jpeg";
import project from "@/public/images/projects/project.png";
import { primaryContext } from "@/src/context";
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
    const { theme } = useContext(primaryContext);

    return (
        <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
            <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                Senior Front End Developer, Problem Solver, Education
            </div>
            <div className="text-sm font-extralight my-5 leading-8">
                <p>
                    As a senior front-end engineer, I&apos;ve led the
                    development of impactful projects benefiting 2 million
                    children daily. Notable creations include a clock PWA app
                    modeled after Google&apos;s, ensuring seamless time
                    management. Additionally, I spearheaded the creation of a
                    global chat app facilitating communication worldwide.
                    Complemented by various smaller projects in ReactJS,
                    HTML/CSS/JS, JavaScript, C++, and PHP.
                </p>
            </div>
            <div className="flex flex-wrap justify-center mb-24">
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link href={"https://lilyogis.in/"} target="_blank">
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
                                Rocket Learning Platform
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                Rocket Learning&apos;s platform is meticulously
                                crafted using HTML, CSS (Bootstrap), and
                                JavaScript for frontend, complemented by Laravel
                                7 backend and MySQL 7 database. Serving 2
                                million children daily on WhatsApp, it
                                facilitates intricate functions such as content
                                intervention across numerous groups, process
                                automation through Excel, custom certificates,
                                custom dashboards, worksheets, and custom forms
                                creation and sending.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" />{" "}
                            lilyogis.in (company product)
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://www.dev.rocketlearning.app/"}
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
                                Rocket Learning PWA game
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                Rocket Learning&apos;s PWA game, crafted with
                                ReactJS and Material UI for frontend, and
                                Node.js for backend, leverages GraphQL and MySQL
                                for database functionality. Piloted with 50k
                                children, it offers educational game modules,
                                enhancing learning experiences.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" />
                            dev.rocketlearning.app (company product)
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://clock-one-mu.vercel.app/"}
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
                                    src={clock}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                PWA Clock App
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                Clock PWA, meticulously developed with ReactJS,
                                Redux, and Material UI for frontend intricacies,
                                and powered by indexedDB for seamless database
                                operations. Combining diverse functionalities
                                including analog and digital clock designs,
                                world time, multiple alarms, timers, and
                                stopwatch features, it offers a comprehensive
                                yet elegant timekeeping solution.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" />
                            clock-one-mu.vercel.app (personal)
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/Clock"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://buddycchat.netlify.app/"}
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
                                    src={buddyChat}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                Buddy Chat App
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                Buddy Chat App is expertly crafted with ReactJS
                                and Tailwind CSS for a sleek UI, complemented by
                                Socket.IO for seamless messaging functionality.
                                Utilizing localDB and MongoDB for database
                                operations, it ensures simplicity, security, and
                                reliability. A trusted platform for free,
                                private communication, fostering effortless
                                connections with friends and family.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" />
                            buddycchat.netlify.app (Personal)
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/ChatApp-Frontend"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://mahipalinfo.vercel.app/"}
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
                                    src={resume}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                Resume Website
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The Resume Website, constructed with React.js
                                (Next.js) and Tailwind CSS, epitomizes modernity
                                and responsiveness. It seamlessly adapts to
                                various screen sizes, ensuring optimal user
                                experience. Comprehensive in content, it
                                presents all pertinent details and references,
                                serving as a dynamic showcase of professional
                                accomplishments.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" />
                            mahipalinfo.vercel.app (Personal)
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/resume"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link href={"https://mbm.ac.in/"} target="_blank">
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
                                    src={mbm}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                MBM College Website landing page + Portal
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The MBM College website and portal have been
                                meticulously developed with HTML, CSS
                                (Bootstrap), and JavaScript for frontend
                                aesthetics, while core PHP drives backend
                                functionality. Leveraging MySQL for database
                                storage, the portal serves as a pivotal hub for
                                all Training & Placement Cell operations,
                                facilitating placement processes for nearly
                                1,000 students. Developed under the guidance of
                                the TPO head, the platform has garnered acclaim
                                from visiting companies for its efficiency and
                                user-friendly design.
                            </div>
                        </div>
                        <div className="flex justify-start items-end text-sm font-semibold opacity-60 group-hover:text-hover transition duration-500 ease-in-out">
                            <BsLink45Deg size={20} className="mr-5" /> mbm.ac.in
                            (College product)
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://github.com/Mahi0027/DSA_learning_cpp"}
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
                                    className={`object-cover rounded-full ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    loading="lazy"
                                    src={project}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                DSA Learning Console Base App
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The DSA Learning Console-based App, developed in
                                C++ with a graphic library, offers users a
                                seamless experience through a cursor-based
                                interface. Users can navigate predefined topics,
                                selecting and accessing detailed information
                                with ease. Currently in development, it promises
                                to enhance learning experiences.
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/DSA_learning_cpp"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://github.com/Mahi0027/NewsWebApp"}
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
                                    className={`object-cover rounded-full ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    loading="lazy"
                                    src={project}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                News Web App
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The News Web App, built with React.js, offers a
                                streamlined user experience as a single-page
                                application. Users can select from various
                                categories, accessing updated news through an
                                integrated news API. Providing swift access to
                                the latest global updates, it ensures timely
                                information dissemination.
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/NewsWebApp"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://github.com/Mahi0027/TextUtils"}
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
                                    className={`object-cover rounded-full ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    loading="lazy"
                                    src={project}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                Texts Utils Web App
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The Texts Utils Web App, developed in React.js,
                                provides a user-friendly interface for string
                                manipulation. With options to edit strings based
                                on user preferences, such as correcting errors
                                or modifying specific characters, it offers a
                                convenient solution for text editing needs.
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/TextUtils"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
                <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 border border-spacing-1 rounded-lg m-2 flex-col justify-start items-center p-2 group ${
                        theme === "light"
                            ? "border-light-border hover:bg-light-action"
                            : "border-dark-border hover:bg-dark-action"
                    } transition duration-700 ease-in-out hover:cursor-pointer`}
                >
                    <Link
                        href={"https://github.com/Mahi0027/MS-Paint"}
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
                                    className={`object-cover rounded-full ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    loading="lazy"
                                    src={project}
                                    width={40}
                                    height={40}
                                    alt={"company logo"}
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="text-xs font-bold">
                                Paint Software like Microsoft Paint
                            </div>
                            <div className="text-xs/3 font-extralight my-2 leading-normal">
                                The Paint Software, akin to Microsoft Paint, is
                                crafted in Core Java, offering versatile drawing
                                capabilities. Users can sketch, insert images,
                                annotate, adjust pencil size and color, and
                                erase on a canvas. The application enables
                                saving drawings as images for seamless
                                preservation.
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"https://github.com/Mahi0027/MS-Paint"}
                        target="_blank"
                    >
                        <div className="flex justify-center items-center mt-4 mb-2 text-sm font-extralight">
                            <FaGithub size={20} className="mr-2" />
                            GitHub
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
