"use client";
import landing02 from "@/assets/webp/Landing_02@2x.webp";
import landing01 from "@/assets/webp/Landing_01@2x.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import VerticalAnimationText from "@/components/Texts/vertical-animation-text";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <section className="relative md:flex h-screen overflow-hidden">
        <div
          className={`md:w-6/12 w-full ${styles.imageContainer} ${isLoaded ? styles.slideUp : ""
            }`}
        >
          <Image
            src={landing01}
            alt="Landing 01"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`md:w-6/12 w-full ${styles.imageContainer} ${isLoaded ? styles.slideDown : ""
            }`}
        >
          <Image
            src={landing02}
            alt="Landing 02"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center invert">
          <div className="text-5xl font-bold text-center">
            Bello.
            <br />
            &Buono.
          </div>
        </div>
      </section>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <h2 className="text-[#E11010] text-[1rem] font-normal uppercase">
            Restaurants
          </h2>
          <ul className="text-white text-center space-y-4">
            <li>
              <Link href="/">
                <VerticalAnimationText text="Montmartre" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <VerticalAnimationText text="Ternes" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <VerticalAnimationText text="Saint-Georges" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
