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
          <nav className="flex flex-col backdrop-blur-2xl justify-center w-50">
            <motion.a
              className="m-5 rounded-[20px] text-(--bgc) bg-(--text) p-5 text-3xl"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
            >
              mr_D05
            </motion.a>
            <motion.a
              className=" w-auto h-auto m-5 p-4 rounded-[20px] text-(--text) bg-(--magenta) text-xl text-center"
              href="../"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
            >
              about me
            </motion.a>
          </nav>
        )}
      </>
    );
}
