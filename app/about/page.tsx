"use client";
import React from "react";
import portfolio from "@/public/profile/portrait.webp";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
    return (
        <>
            <div className="mt-36 mx-5 md:mx-8 lg:mx-10">
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:grid-rows-[auto-1fr] md:gap-y-12">
                    <div className="md:pl-20 flex justify-center items-center">
                        <Image
                            className={`object-cover rounded-lg`} /* transform rotate-6 */
                            loading="lazy"
                            src={portfolio}
                            alt={"article"}
                        />
                    </div>
                    <div className="md:order-first md:row-span-2">
                        <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                            I’m Spencer Sharp. I live in New York City, where I
                            design the future.
                        </div>
                        <div className="text-sm font-extralight my-5 leading-8">
                            <p>
                                I’ve loved making things for as long as I can
                                remember, and wrote my first program when I was
                                6 years old, just two weeks after my mom brought
                                home the brand new Macintosh LC 550 that I
                                taught myself to type on.
                            </p>
                            <p>
                                The only thing I loved more than computers as a
                                kid was space. When I was 8, I climbed the
                                40-foot oak tree at the back of our yard while
                                wearing my older sister’s motorcycle helmet,
                                counted down from three, and jumped — hoping the
                                tree was tall enough that with just a bit of
                                momentum I’d be able to get to orbit.
                            </p>
                            <p>
                                I spent the next few summers indoors working on
                                a rocket design, while I recovered from the
                                multiple surgeries it took to fix my badly
                                broken legs. It took nine iterations, but when I
                                was 15 I sent my dad’s Blackberry into orbit and
                                was able to transmit a photo back down to our
                                family computer from space.
                            </p>
                            <p>
                                Today, I’m the founder of Planetaria, where
                                we’re working on civilian space suits and manned
                                shuttle kits you can assemble at home so that
                                the next generation of kids really can make it
                                to orbit — from the comfort of their own
                                backyards.
                            </p>
                        </div>
                    </div>
                    <div className="md:pl-20">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
