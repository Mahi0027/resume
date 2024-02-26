"use client";
import { primaryContext } from "@/src/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import articleImageLight from "@/public/images/articles/chat/light.png";
import articleImageDark from "@/public/images/articles/chat/dark.png";
import Link from "next/link";

const Article1 = () => {
    const { theme } = useContext(primaryContext);
    return (
        <div className="mt-12 mx-2 sm:mx-14 md:mx-20 lg:mx-28">
            <Link href={"/"}>
                <div
                    className={`w-12 h-12 border border-spacing-1 rounded-full flex justify-center shadow-md items-center hover:scale-110 transition duration-700 ease-in-out ${
                        theme === "light"
                            ? "border-light-border"
                            : "border-dark-border"
                    }`}
                >
                    <IoIosArrowRoundBack size={20} />
                </div>
            </Link>
            <div className="my-20 mx-2 sm:mx-4 md:mx-8 lg:mx-10">
                <div className="opacity-50 my-5">| December 15, 2023</div>
                <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                    Introducing Buddy Chat Web App: Redefining Communication
                    with Simplicity and Security
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Buddy Chat Web App emerges as a pinnacle of communication
                    technology, expertly crafted with ReactJS and Tailwind CSS
                    to deliver a sleek and intuitive user interface. Powered by
                    Socket.IO for seamless messaging functionality, and
                    employing localDB and MongoDB for robust database
                    operations, Buddy Chat ensures a secure and reliable
                    platform for free, private communication, fostering
                    effortless connections with friends and family.
                </div>
                <Image
                    className={`object-cover rounded-lg`}
                    loading="lazy"
                    src={
                        theme === "light" ? articleImageLight : articleImageDark
                    }
                    alt={"article"}
                />
                <div className="text-sm font-extralight my-5 leading-8">
                    At its core, Clock PWA seamlessly integrates diverse
                    functionalities catering to a wide range of user needs. From
                    traditional analog and sleek digital clock designs to
                    convenient world time tracking, multiple alarms, timers, and
                    a versatile stopwatch feature, Clock PWA offers a holistic
                    timekeeping experience. This amalgamation of features
                    ensures that users can rely on a single platform for all
                    their time management requirements.
                </div>
                <div className="text-lg font-bold my-5">Journey</div>
                <div className="text-sm font-extralight my-5 leading-8">
                    The journey of building Buddy Chat Web App was one fueled by
                    passion and dedication, spanning approximately 60-70 days of
                    meticulous development. Embarking on the challenge to
                    complete the project within a tight time frame of two
                    months, I poured my hearts into every aspect of its
                    creation. Despite encountering minor delays, the process was
                    an exhilarating experience, with each day presenting new
                    opportunities for growth and innovation.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    A standout feature of Buddy Chat is its commitment to
                    customization and originality. Rejecting the use of
                    ready-made components, I embraced the challenge of crafting
                    each component and module from scratch. This dedication not
                    only resulted in a uniquely tailored user experience but
                    also enriched myself expertise in web development.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Central to Buddy Chat&apos;s success is its responsiveness
                    across various devices. With a responsive design tailored
                    for both mobile and desktop screens, users can seamlessly
                    access the platform from any device, ensuring uninterrupted
                    communication on the go. The dynamic nature of the user
                    interface, managed by Tailwind CSS and ReactJS state
                    variables, optimizes the user experience for each screen
                    size, enhancing accessibility and usability.
                </div>
                <div className="text-lg font-bold my-5">Future Plan</div>
                <div
                    className={`p-5 text-sm rounded-lg border-spacing-1 my-5 leading-8 ${
                        theme === "light"
                            ? "bg-dark-action border-dark-border text-dark-text"
                            : "bg-light-action border-light-border text-light-text"
                    }`}
                >
                    Despite reaching its initial milestone with the release of
                    version 1.0.0, the journey of Buddy Chat is far from over. I
                    remains committed to enhancing the platform&apos;s
                    functionality and user experience with a roadmap that
                    includes features such as one-to-one calling, built-in
                    emojis, message replies, message reactions, individual
                    message deletion, complete user authentication, and user
                    linking capabilities.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Buddy Chat Web App represents more than just a communication
                    tool; it symbolizes innovation, connectivity, and trust.
                    With each update, it aims to redefine the standards of
                    online communication, empowering users to connect with their
                    loved ones in a secure and intuitive environment. As Buddy
                    Chat continues to evolve, it stands poised to become the
                    go-to platform for individuals seeking a seamless and
                    enriching communication experience.
                </div>
            </div>
        </div>
    );
};

export default Article1;
