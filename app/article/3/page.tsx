"use client";
import { primaryContext } from "@/src/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import articleImage from "@/public/images/articles/certificate/cert.jpeg";
import Link from "next/link";

const Article3 = () => {
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
                <div className="opacity-50 my-5">| August 12, 2023</div>
                <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                    Empowering Education: Custom Certificate Generation and
                    WhatsApp Group Distribution
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    In the realm of education, recognition plays a pivotal role
                    in motivating learners and celebrating their achievements.
                    Custom Certificates Generation emerges as a transformative
                    feature, enabling the effortless creation and dissemination
                    of personalized certificates to WhatsApp groups. This
                    innovative tool harnesses the power of certificate images
                    and data from Excel sheets to generate thousands of unique
                    certificates with just a single click, catering to diverse
                    recipients with individualized details.
                </div>
                <Image
                    className={`object-cover rounded-lg`}
                    loading="lazy"
                    src={articleImage}
                    alt={"article"}
                />
                <div className="text-sm font-extralight my-5 leading-8">
                    At its core, Custom Certificate Generation is designed to
                    streamline the process of recognizing achievements,
                    particularly in educational settings. Whether it&apos;s
                    acknowledging academic excellence, participation in
                    extracurricular activities, or special accomplishments, this
                    feature offers a scalable solution to meet the demands of
                    large-scale certificate distribution.
                </div>
                <div className="text-lg font-bold my-5">Working Process</div>
                <div className="text-sm font-extralight my-5 leading-8">
                    One of the key applications of this feature is evident in
                    Rocket Learning, where it serves as a cornerstone in the
                    distribution of certificates to thousands of recipients on a
                    weekly basis. By leveraging certificate images and data
                    stored in Excel sheets, Rocket Learning can seamlessly
                    generate certificates tailored to each recipient&apos;s
                    profile, including their name, achievements, and even
                    profile images. This personalized touch not only enhances
                    the value of the certificates but also fosters a sense of
                    pride and accomplishment among the recipients and their
                    families.
                </div>
                <div className="text-lg font-bold my-5">Journey</div>
                <div className="text-sm font-extralight my-5 leading-8">
                    The complexity of this feature lies in its ability to
                    dynamically generate certificates with varying content and
                    layouts. Utilizing a canvas-based approach, the system
                    overlays text, emojis, and images onto the certificate
                    image, allowing for limitless customization options. Before
                    all, at time of excel sheet update, we scan excel
                    sheet&apos;s each column & row and check all the required
                    condition for generate certificate. From adjusting the
                    orientation of text and images to incorporating multiple
                    elements at different positions, the flexibility offered by
                    Custom Certificate Generation ensures that each certificate
                    is unique and visually appealing.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    The development of this feature was no small feat, requiring
                    over three months of dedicated effort to refine its
                    functionality and usability. The intricacies of integrating
                    certificate images, data processing from Excel sheets, and
                    seamless WhatsApp group distribution posed significant
                    technical challenges. However, the end result justified the
                    investment, with Rocket Learning witnessing a remarkable
                    increase of over 26-27% in activation levels following the
                    implementation of this feature.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    In conclusion, Custom Certificate Generation represents a
                    paradigm shift in how educational achievements are
                    recognized and celebrated. By combining automation,
                    personalization, and seamless distribution via WhatsApp
                    groups, this feature empowers educators to inspire and
                    motivate learners on a massive scale. As technology
                    continues to reshape the landscape of education, tools like
                    Custom Certificate Generation pave the way for a future
                    where recognition knows no bounds.
                </div>
            </div>
        </div>
    );
};

export default Article3;
