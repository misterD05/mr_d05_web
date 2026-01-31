"use client"
import React from "react";
import "../globals.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import { Loading } from "./components";

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

    return (
      <>
        {showLoading ? (
          <Loading />
        ) : (
          <nav className="scrollbar-hidden fixed top-0 right-0 flex flex-col backdrop-blur-md justify-center shadow-lg rounded-l-[30px] bg-[black]/5 w-auto h-full transition-colors duration-1000 shadow-[inset_0_-4px_10px_-1px_rgba(255,255,255,0.1)]">
            <motion.a
              className="m-3 rounded-[20px] text-(--bgc) bg-(--text) p-3 text-sm text-center font-bold"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
            >
              mr_D05
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--magenta) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"></path></svg>
              <motion.span
                className="hidden group-hover:inline-block text-xs font-bold">
                about me
              </motion.span>

            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--blue) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>
              <motion.span
                className="hidden group-hover:inline-block text-xs font-bold">
                my projects
              </motion.span>
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--acqua) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <motion.span
                className="hidden group-hover:inline-block text-xs font-bold">
                github
              </motion.span>
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--tangerine) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path><path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path></svg>
              <motion.span
                className="hidden group-hover:inline-block text-xs font-bold">
                contact me
              </motion.span>
            </motion.a>

          </nav>
        )}
      </>
    );
}
