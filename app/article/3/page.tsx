"use client";
import { primaryContext } from "@/src/context";
import Image from "next/image";
import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import articleImage from "@/public/images/articles/1.webp";
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
                <div className="opacity-50 my-5">| September 5, 2022</div>
                <div className="text-4xl font-extrabold my-14 flex justify-start leading-relaxed">
                    Crafting a design system for a multiplanetary future
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Most companies try to stay ahead of the curve when it comes
                    to visual design, but for Planetaria we needed to create a
                    brand that would still inspire us 100 years from now when
                    humanity has spread across our entire solar system.
                </div>
                <Image
                    className={`object-cover rounded-lg`}
                    loading="lazy"
                    src={articleImage}
                    alt={"article"}
                />
                <div className="text-sm font-extralight my-5 leading-8">
                    I knew that to get it right I was going to have to replicate
                    the viewing conditions of someone from the future, so I
                    grabbed my space helmet from the closet, created a new Figma
                    document, and got to work.
                </div>
                <div className="text-lg font-bold my-5">Sermone fata</div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Lorem markdownum, bracchia in redibam! Terque unda puppi
                    nec, linguae posterior in utraque respicere candidus
                    Mimasque formae; quae conantem cervice. Parcite variatus,
                    redolentia adeunt. Tyrioque dies, naufraga sua adit partibus
                    celanda torquere temptata, erit maneat et ramos, iam ait
                    dominari potitus! Tibi litora matremque fumantia condi
                    radicibus opusque.
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Deus feram verumque, fecit, ira tamen, terras per alienae
                    victum. Mutantur levitate quas ubi arcum ripas oculos abest.
                    Adest commissaque victae in gemitus nectareis ire diva
                    dotibus ora, et findi huic invenit; fatis? Fractaque dare
                    superinposita nimiumque simulatoremque sanguine, at voce
                    aestibus diu! Quid veterum hausit tu nil utinam paternos
                    ima, commentaque.
                </div>
                <div
                    className={`p-5 text-sm rounded-lg border-spacing-1 my-5 leading-8 ${
                        theme === "light"
                            ? "bg-dark-action border-dark-border text-dark-text"
                            : "bg-light-action border-light-border text-light-text"
                    }`}
                >
                    Deus feram verumque, fecit, ira tamen, terras per alienae
                    victum. Mutantur levitate quas ubi arcum ripas oculos abest.
                    Adest commissaque victae in gemitus nectareis ire diva
                    dotibus ora, et findi huic invenit; fatis? Fractaque dare
                    superinposita nimiumque simulatoremque sanguine, at voce
                    aestibus diu! Quid veterum hausit tu nil utinam paternos
                    ima, commentaque.
                </div>
                <div className="text-lg font-bold my-5">
                    Lethaei Pindumve me quae dinumerat Pavor
                </div>
                <div className="text-sm font-extralight my-5 leading-8">
                    Idem se saxa fata pollentibus geminos; quos pedibus. Est
                    urnis Herses omnes nec divite: et ille illa furit sim verbis
                    Cyllenius.
                    <ol className="ml-10" style={{ listStyleType: "decimal" }}>
                        <li>Captus inpleverunt collo</li>
                        <li>Nec nam placebant</li>
                        <li>Siquos vulgus</li>
                        <li>Dictis carissime fugae</li>
                        <li>A tacitos nulla viginti</li>
                    </ol>
                    Ungues fistula annoso, ille addit linoque motatque uberior
                    verso rubuerunt confine desuetaque. Sanguine anteit
                    emerguntque expugnacior est pennas iniqui ecce haeret genus:
                    peiora imagine fossas Cephisos formosa! Refugitque amata
                    refelli supplex. Summa brevis vetuere tenebas, hostes
                    vetantis, suppressit, arreptum regna. Postquam conpescit
                    iuvenis habet corpus, et erratica, perdere, tot mota ars
                    talis.
                </div>
            </div>
        </div>
    );
};

export default Article3;
