"use client";
// import type { Metadata } from "next";
import { lazy, useEffect, useRef, useState } from "react";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import mahipalProfile from "@/public/profile/mahipal.jpg";
import moon from "@/public/icons/moon-solid.svg";
import sun from "@/public/icons/sun-solid.svg";
import bar from "@/public/icons/bars-solid.svg";
import Link from "next/link";
import { primaryContext } from "@/src/context";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import favIcon from "@/public/profile/mahipal.ico";

const inter = Quicksand({ weight: "400", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Mahipal's Resume",
//   description: "Experienced web developer with a passion for building responsive and user-friendly websites. This contain my resume details. Treat this as resume. View my portfolio and contact information.",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const route = useRouter();
    const pathname = usePathname();
    const [theme, setTheme] = useState<string>("light");
    const [articleFlag, setArticleFlag] = useState<boolean>(false);
    const showFlag = useRef(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleMenuDiv();

        const handleOutsideClick = (event: any) => {
            if (
                window.innerWidth < 640 &&
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                handleMenuDiv();
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        scrollToTop();

        if (pathname === "/") {
            showInitialProfile();
        } else {
            hideInitialProfile();
        }

        const handleInitialProfile = () => {
            if (window.scrollY < 100 && pathname === "/") {
                if (!showFlag.current) {
                    showInitialProfile();
                    showFlag.current = true;
                }
            } else {
                if (showFlag.current) {
                    hideInitialProfile();
                    showFlag.current = false;
                }
            }
        };

        handleMenuDiv();

        window.addEventListener("scroll", handleInitialProfile);
        window.addEventListener("resize", handleMenuDiv);
        return () => {
            window.removeEventListener("scroll", handleInitialProfile);
            window.removeEventListener("resize", handleMenuDiv);
        };
    }, [pathname]);

    useEffect(() => {
        handleMenuDiv();
    }, [theme]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleMenuDiv = () => {
        if (window.innerWidth < 640) {
            document.getElementById("menuOption")?.classList.add("hidden");
        } else {
            document.getElementById("menuOption")?.classList.remove("hidden");
        }
    };

    const showInitialProfile = () => {
        const profileChildContainer: HTMLElement | null =
            document.getElementById("profileChildContainer");
        const profileImage: HTMLElement | null =
            document.getElementById("profileImage");
        profileChildContainer?.classList.add("initial-profile-div-size");
        profileChildContainer?.classList.remove("after-profile-div-size");
        profileImage?.classList.add("initial-profile-size");
        profileImage?.classList.remove("after-profile-size");
    };

    const hideInitialProfile = () => {
        const profileChildContainer: HTMLElement | null =
            document.getElementById("profileChildContainer");
        const profileImage: HTMLElement | null =
            document.getElementById("profileImage");
        profileChildContainer?.classList.remove("initial-profile-div-size");
        profileChildContainer?.classList.add("after-profile-div-size");
        profileImage?.classList.remove("initial-profile-size");
        profileImage?.classList.add("after-profile-size");
    };

    const toggleTheme = async () => {
        setTheme((prevTheme) => {
            if (prevTheme === "dark") {
                return "light";
            }
            return "dark";
        });
    };

    const toggleMenuOptions = async () => {
        const menuOptionsDiv: HTMLElement | null =
            document.getElementById("menuOption");
        if (menuOptionsDiv?.classList.contains("hidden")) {
            menuOptionsDiv?.classList.remove("hidden");
        } else {
            menuOptionsDiv?.classList.add("hidden");
        }
    };
    return (
        <html lang="en">
            <head>
                <title>Mahipal Info</title>
                <meta
                    name="description"
                    content="Experienced web developer with a passion for building responsive and user-friendly websites. This contain my resume details. Treat this as resume. View my portfolio and contact information."
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    sizes="94x94"
                    href="/public/profile/mahipal.ico"
                />
                {/* <link
                    rel="icon"
                    type="image/x-icon"
                    sizes="188x188"
                    href="/profile/mahipal.ico"
                /> */}
            </head>
            <body>
                <div className="flex justify-center h-full z-50">
                    <div
                        className={`w-0 sm:w-[10%] lg:w-[15%] xl:w-[20%] bg-gradient-to-tl ${
                            theme === "light"
                                ? "from-light-background-gradient-from to-light-background-gradient-to"
                                : "from-dark-background-gradient-from to-dark-background-gradient-to"
                        }`}
                    ></div>

                    <div
                        className={`w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] border-x border-spacing-0.5 bg-gradient-to-tl  ${
                            theme === "light"
                                ? "text-light-text border-light-border from-light-option-gradient-from to-light-option-gradient-to"
                                : "text-dark-text border-dark-border from-dark-options-gradient-from to-dark-options-gradient-to"
                        } ${inter.className}`}
                    >
                        <div
                            id="profileParentContainer"
                            className="sticky top-2 mt-10 flex justify-around items-center mx-2 sm:mx-10"
                        >
                            <div
                                id="profileChildContainer"
                                className={`initial-profile-div-size flex justify-center items-center rounded-full p-1`}
                            >
                                <Image
                                    loading="lazy"
                                    id="profileImage"
                                    className={`initial-profile-size object-cover`}
                                    src={mahipalProfile}
                                    alt={"profile"}
                                />
                            </div>
                            <div
                                ref={menuButtonRef}
                                className={`w-20 h-16 min-w-16 min-h-16 ml-24 sm:ml-0 sm:absolute sm:hidden border border-spacing-0.5 rounded-full flex justify-center items-center shadow-lg hover:cursor-pointer hover:scale-105 transition ${
                                    theme === "light"
                                        ? "border-light-border  hover:bg-light-action"
                                        : "border-dark-border hover:bg-dark-action"
                                } z-10 backdrop-filter backdrop-blur-md`}
                                onClick={toggleMenuOptions}
                            >
                                <Image
                                    loading="lazy"
                                    className={`transform-effect ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    src={bar}
                                    width={25}
                                    height={25}
                                    alt={"menuIcon"}
                                />
                            </div>
                            <div
                                id="menuOption"
                                ref={modalRef}
                                className={`hidden absolute sm:relative mt-80 sm:m-0 h-56 sm:h-16 rounded-3xl sm:rounded-full w-full sm:w-2/3  md:w-3/4 lg:w-4/5  border border-spacing-0.5 flex justify-center items-center ${
                                    theme === "light"
                                        ? "text-light-text border-light-border bg-light-action/5"
                                        : "text-dark-text border-dark-border bg-dark-action/5"
                                } z-10 backdrop-filter backdrop-blur-md border-dark-border bg-dark-action shadow-lg`}
                            >
                                <ul className="w-full flex flex-col sm:flex-row justify-around items-center gap-5 sm:gap-0">
                                    <li
                                        className={`hover:text-hover hover:cursor-pointer ${
                                            pathname === "/" ? "text-hover" : ""
                                        }`}
                                    >
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li
                                        className={`hover:text-hover hover:cursor-pointer ${
                                            pathname === "/about"
                                                ? "text-hover"
                                                : ""
                                        }`}
                                    >
                                        <Link href="about">About</Link>
                                    </li>
                                    {/* education, experience,contacts */}
                                    <li
                                        className={`hover:text-hover hover:cursor-pointer ${
                                            pathname === "/skills"
                                                ? "text-hover"
                                                : ""
                                        }`}
                                    >
                                        <Link href="skills">Skills</Link>
                                    </li>
                                    <li
                                        className={`hover:text-hover hover:cursor-pointer ${
                                            pathname === "/projects"
                                                ? "text-hover"
                                                : ""
                                        }`}
                                    >
                                        <Link href="projects">Projects</Link>
                                    </li>
                                    <li
                                        className={`hover:text-hover hover:cursor-pointer ${
                                            pathname === "/activities"
                                                ? "text-hover"
                                                : ""
                                        }`}
                                    >
                                        <Link href="activities">
                                            Activities
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`w-20 h-16 min-w-16 min-h-16 border border-spacing-0.5 rounded-full flex justify-center items-center shadow-lg hover:cursor-pointer hover:scale-105 transition ${
                                    theme === "light"
                                        ? "border-light-border hover:bg-light-action/5"
                                        : "border-dark-border hover:bg-dark-action/5"
                                } z-50 backdrop-filter backdrop-blur-md`}
                                onClick={toggleTheme}
                            >
                                <Image
                                    loading="lazy"
                                    className={`transform-effect ${
                                        theme === "dark" ? "invert" : ""
                                    }`}
                                    src={theme === "light" ? moon : sun}
                                    width={25}
                                    height={25}
                                    alt={"theme"}
                                />
                            </div>
                        </div>
                        <div className={`z-0 `}>
                            <primaryContext.Provider
                                value={{ theme, hideInitialProfile }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div key={pathname}>
                                        {children}
                                        <motion.div
                                            className="slide-in"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 0 }}
                                            exit={{ scaleX: 1 }}
                                            transition={{
                                                duration: 1,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        ></motion.div>
                                        <motion.div
                                            className="slide-out"
                                            initial={{ scaleX: 1 }}
                                            animate={{ scaleX: 0 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{
                                                duration: 1,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        ></motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </primaryContext.Provider>
                        </div>
                        <footer
                            className={`w-full h-20 flex justify-between items-center border-t border-spacing-1 ${
                                theme === "light"
                                    ? "border-light-border"
                                    : "border-dark-border"
                            }`}
                        >
                            <div></div>
                            <div className="text-xs m-5 font-extralight opacity-75">
                                © 2024 Mahipal Singh.{" "}
                                <span className="font-bold">
                                    100% made by Mahipal Singh
                                </span>
                                . All rights reserved.
                            </div>
                        </footer>
                    </div>

                    <div
                        className={`w-0 sm:w-[10%] lg:w-[15%] xl:w-[20%] bg-gradient-to-tl ${
                            theme === "light"
                                ? "from-light-background-gradient-from to-light-background-gradient-to"
                                : "from-dark-background-gradient-from to-dark-background-gradient-to"
                        }`}
                    ></div>
                </div>
            </body>
        </html>
    );
}
