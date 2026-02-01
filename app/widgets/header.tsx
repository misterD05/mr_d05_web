"use client"
import React, { use } from "react";
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

  const hovered = [false , false , false , false , false ];
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    return (
      <>
        {showLoading ? (
          <Loading />
        ) : (
            <motion.nav
              whileHover={{width: "170px", scale: 1.02}}
              className="z-100 scrollbar-hidden fixed top-0 right-0 flex flex-col items-end backdrop-blur-md justify-center shadow-lg rounded-l-[30px] bg-[black]/5 w-fit h-full transition-colors duration-1000 shadow-[inset_0_-4px_10px_-1px_rgba(255,255,255,0.1)]">
            <motion.a
              className="m-3 rounded-[20px] text-(--bgc) bg-(--text) p-3 text-sm text-center font-bold w-fit"
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
              onHoverStart={()=>setHoveredIndex(0)}
              onHoverEnd={()=>setHoveredIndex(-1)}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"></path></svg>
              <motion.span
                animate={{ opacity: hoveredIndex === 0 ? 1 : 0 , x: hoveredIndex === 0 ? 0 : -8 , width: hoveredIndex === 0 ? "auto" : "0px", height: hoveredIndex === 0 ? "auto" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
                className="text-xs font-bold">
                about me
              </motion.span>

            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--blue) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onHoverStart={()=>setHoveredIndex(1)}
              onHoverEnd={()=>setHoveredIndex(-1)}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>
              <motion.span
                animate={{ opacity: hoveredIndex === 1 ? 1 : 0 , x: hoveredIndex === 1 ? 0 : -8 , width: hoveredIndex === 1 ? "auto" : "0px", height: hoveredIndex === 1 ? "auto" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
                className="text-xs font-bold">
                my projects
              </motion.span>
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--acqua) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onHoverStart={()=>setHoveredIndex(2)}
              onHoverEnd={()=>setHoveredIndex(-1)}
              >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <motion.span
                animate={{ opacity: hoveredIndex === 2 ? 1 : 0 , x: hoveredIndex === 2 ? 0 : -8 , width: hoveredIndex === 2 ? "auto" : "0px", height: hoveredIndex === 2 ? "auto" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
                className="text-xs font-bold">
                github
              </motion.span>
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--tangerine) text-sm text-center flex flex-row items-center justify-center gap-2"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onHoverStart={()=>setHoveredIndex(3)}
              onHoverEnd={()=>setHoveredIndex(-1)}
              >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path><path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path></svg>
              <motion.span
                animate={{ opacity: hoveredIndex === 3 ? 1 : 0 , x: hoveredIndex === 3 ? 0 : -8 , width: hoveredIndex === 3 ? "auto" : "0px", height: hoveredIndex === 3 ? "auto" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
                className="text-xs font-bold">
                contact me
              </motion.span>
            </motion.a>
            <motion.a
              className="group w-auto h-auto m-5 p-3 rounded-[20px] text-(--bgc) bg-(--mode) text-sm text-center flex flex-row items-center justify-center gap-2"
              onClick={() => {
                setDark(prev => {
                  const next = !prev;
                  localStorage.setItem("theme", next ? "dark" : "light");
                  return next;
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onHoverStart={()=>setHoveredIndex(4)}
              onHoverEnd={()=>setHoveredIndex(-1)}
            >
              {dark ? (
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ): (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path></g></svg>
              )}
              <motion.span
                animate={{ opacity: hoveredIndex === 4 ? 1 : 0 , x: hoveredIndex === 4 ? 0 : -8 , width: hoveredIndex === 4 ? "auto" : "0px", height: hoveredIndex === 4 ? "auto" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
                className="text-xs font-bold">
                {dark ? "light mode" : "dark mode"}
              </motion.span>
            </motion.a>
          </motion.nav>
        )}
      </>
    );
}
