"use client"
import React, { use } from "react";
import "../globals.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import { Loading, MenuButtonLogo, MenuButton, ThemeToggleButton} from "./components";

export function MenuBar() {
  const containerRef = useRef(null);
  const el = containerRef.current;
  const [showLoading, setShowLoading] = useState(true);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(isSystemDark);
    } else {
      setDark(savedTheme === "dark");
    }
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      setTimeout(() => setShowLoading(false), 1500);
      localStorage.setItem("hasLoaded", "true");
    } else {
      setShowLoading(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const hovered = [false , false , false , false , false ];
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    return (
      <div className="z-100 scrollbar-hidden fixed top-0 right-0 flex flex-col items-end h-full justify-center">
        <motion.nav
          whileHover={{width: "145px", transition: { duration: 0.3 }}}
          className=" m-5  flex flex-col items-end backdrop-blur-xs justify-center shadow-lg rounded-[30px] bg-white/30 w-fit h-fit transition-colors duration-1000 shadow-[inset_0_-4px_10px_-1px_rgba(255,255,255,0.1)]">
        <MenuButtonLogo text="mr_D05" svg={null} href="../" />
          <MenuButton text="about me" color="--magenta" svg={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"></path></svg>} href="../aboutMe" />
          <MenuButton text="my projects" color="--blue" svg={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>} href="../myProjects" />
          <MenuButton text="github" color="--acqua" svg={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>} href="../github"/>
          <MenuButton text="contact me" color="--tangerine" svg={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>} href="../contacts" />
          <ThemeToggleButton></ThemeToggleButton>
          </motion.nav>
        )
      </div>
    );
}
