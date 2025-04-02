"use client";
import { useEffect, useRef } from "react";
import HamburgerMenu from "../hamburger-menu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef(null);
  const borderRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const nav = navRef.current;
    const bg = bgRef.current;
    if (!nav || !bg) return;

    // Background color animation
    gsap.fromTo(bg,
      {
        height: 0,
        opacity: 0,
        top: 0
      },
      {
        height: "100%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "body",
          start: "50px top",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-14 px-18"
    >
      {/* Background element */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[#111111] opacity-0 origin-top border-b-white border-b-1"
      />

      <HamburgerMenu />
      <div className="text-2xl font-bold invert">Fabbrica</div>
      <div className="ri-instagram-line text-3xl cursor-pointer invert" />
    </nav>
  );
}
