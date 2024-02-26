"use client";
import { primaryContext } from "@/src/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import articleImageLight from "@/public/images/articles/clock/light.png";
import articleImageDark from "@/public/images/articles/clock/dark.png";
import Link from "next/link";

const Article2 = () => {
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
                <div className="opacity-50 my-5">| September 21, 2023</div>
                <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                    Introducing Clock PWA: Your Ultimate Timekeeping Companion
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Clock PWA stands as a testament to meticulous development,
                    crafted with cutting-edge technologies such as ReactJS,
                    Redux, and Material UI for frontend intricacies, and fueled
                    by indexedDB for seamless database operations. This
                    innovative web application, akin to the renowned Google
                    Clock app, offers a sophisticated array of features designed
                    to redefine timekeeping in the digital realm.
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
                    The journey of Clock PWA spanned approximately 70-75 days of
                    dedicated development effort. Inspired by the ambition to
                    create a timekeeping tool worthy of user&apos;s trust, the
                    development process was both challenging and rewarding.
                    Despite facing various hurdles, I tried to persevered,
                    driven by the vision of delivering a polished product that
                    exceeds expectations.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    One of the most formidable challenges encountered during
                    development was efficient event handling. The ability to
                    create and manage multiple alarms and timers simultaneously
                    demanded intricate logic and meticulous attention to detail.
                    Every second, the application&apos;s state had to be updated
                    seamlessly, ensuring accurate timekeeping and timely event
                    triggers. Overcoming this challenge required significant
                    time and energy, I dedicated to refining the event handling
                    mechanisms to perfection.
                </div>
                <div className="text-lg font-bold my-5">Future Plan</div>
                <div
                    className={`p-5 text-sm rounded-lg border-spacing-1 my-5 leading-8 ${
                        theme === "light"
                            ? "bg-dark-action border-dark-border text-dark-text"
                            : "bg-light-action border-light-border text-light-text"
                    }`}
                >
                    Despite the complexities, Clock PWA has now reached its
                    first milestone with the release of version 1.0.0. However,
                    the journey does not end here. I remains committed to
                    enhancing the application&apos;s robustness and expanding
                    its feature set. Future updates will introduce
                    functionalities such as an always-on display mode, support
                    for leap time, task management capabilities, to-do lists,
                    activity tracking, and much more.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Clock PWA is not merely a timekeeping tool; it is a
                    testament to innovation and dedication. With each update, it
                    strives to redefine the boundaries of what a clock
                    application can achieve, empowering users to manage their
                    time more effectively and effortlessly. As Clock PWA
                    continues to evolve, it is poised to become the go-to choice
                    for individuals seeking a comprehensive and elegant solution
                    for their timekeeping needs.
                </div>
            </div>
        </div>
    );
};

export default Article2;
