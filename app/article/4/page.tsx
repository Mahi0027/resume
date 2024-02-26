"use client";
import { primaryContext } from "@/src/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import articleImage from "@/public/images/articles/dashboard/dashboard.png";
import Link from "next/link";

const Article4 = () => {
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
                <div className="opacity-50 my-5">| March 18, 2022</div>
                <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                    Empowering Data Analysis with Dynamic Dashboards: A
                    Game-Changer for Rocket Learning Platform Users
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    In today&apos;s data-driven world, access to real-time data
                    analysis and visualization is paramount for informed
                    decision-making. For users of the Rocket Learning Platform,
                    this necessity is met through the innovative Dynamic
                    Dashboard feature. Designed to provide users with
                    customizable graphs and analytics, this feature
                    revolutionizes the way data is interpreted and utilized.
                </div>
                <Image
                    className={`object-cover rounded-lg`}
                    loading="lazy"
                    src={articleImage}
                    alt={"article"}
                />
                <div className="text-sm font-extralight my-5 leading-8">
                    The primary purpose of the Dynamic Dashboard feature is to
                    equip Rocket Learning Platform users with the tools they
                    need to gain valuable insights into their data in real-time.
                    By allowing users to generate their own dashboards and
                    designate a default view for their home screen, the feature
                    ensures that users have instant access to the most pertinent
                    data analysis for their needs.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    One of the standout aspects of the Dynamic Dashboard feature
                    is its high level of customization. Users have the freedom
                    to create their own graphs by selecting preset coordinates
                    and combinations, tailoring their dashboards to their
                    specific requirements. Moreover, users can create multiple
                    dashboards, each containing multiple graphs, further
                    enhancing the depth of analysis possible on the platform.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Crucially, the feature also enables users to add multiple
                    filters based on their chosen coordinates, providing an
                    additional layer of refinement to their data analysis. This
                    level of flexibility ensures that users can delve deep into
                    their data and extract meaningful insights with ease.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    The user experience is further enhanced by the intuitive
                    interface, which allows users to effortlessly drag and drop
                    dashboards and adjust their positions according to
                    preference. This seamless interaction enables users to
                    organize their data in a manner that best suits their
                    workflow, enhancing productivity and efficiency.
                </div>
                <div className="text-lg font-bold my-5">Journey</div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Behind the scenes, the development of the Dynamic Dashboard
                    feature was a complex and meticulous process, requiring over
                    1.5 months of ideation and implementation. Leveraging the
                    power of Plotly (a D3 library), the feature delivers
                    visually stunning and interactive graphs that rival those
                    found in leading data visualization platforms such as Google
                    Console Developer Dashboard and PowerBI.
                </div>
                <div className="text-lg font-bold my-5">Key Point</div>
                <div
                    className={`p-5 text-sm rounded-lg border-spacing-1 my-5 leading-8 ${
                        theme === "light"
                            ? "bg-dark-action border-dark-border text-dark-text"
                            : "bg-light-action border-light-border text-light-text"
                    }`}
                >
                    The significance of the Dynamic Dashboard feature is
                    underscored by its popularity among users, particularly
                    government officers. With over 90% of government officers
                    utilizing the platform to track the progress of children
                    within their jurisdictions, the feature has become an
                    indispensable tool for data-driven decision-making in
                    education policy and administration.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    In conclusion, the Dynamic Dashboard feature represents a
                    significant milestone in data analysis and visualization for
                    users of the Rocket Learning Platform. Its unparalleled
                    level of customization, real-time capabilities, and
                    intuitive interface make it a game-changer for data-driven
                    decision-making in education and beyond. As one of the most
                    satisfying products developed, it stands as a testament to
                    the commitment to excellence and innovation within the
                    Rocket Learning Platform ecosystem.
                </div>
            </div>
        </div>
    );
};

export default Article4;
