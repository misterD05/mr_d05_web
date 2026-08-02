"use client"
import "../globals.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ElementType, useEffect, useState } from "react";




export function Loading() {
    return <>TODO</>
}



type ButtonProps = {
    text: string;
    svg: React.ReactNode;
    href: string;
    color?: string;
};

export function MenuButtonLogo({ text, href }: ButtonProps) {
    return (
        <motion.a
                className="m-2 rounded-[20px] text-(--bgc) bg-(--text) p-3 text-lg text-center font-bold w-fit"
                href={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: -10 }}
            >
            {text}
        </motion.a>
    );
}


export function MenuButton({ text, svg, href, color }: ButtonProps) {
    const [hoveredIndex, setHoveredIndex] = useState<boolean>(false);
    return (
    <motion.a
        className={`group w-auto h-auto m-2 p-3 rounded-[20px] text-(--bgc)  text-lg text-center flex flex-row items-center justify-center`}
        href={href}
        whileTap={{ scale: 0.95, rotate: -10 }}
        initial={{ backgroundColor: `var(${color})` }}
        onHoverStart={()=>setHoveredIndex(true)}
        onHoverEnd={() => setHoveredIndex(false)}
        onTapStart={()=> console.log("prova")}
    >
        {svg}
        <motion.span
            animate={{ opacity: hoveredIndex ? 1 : 0 , x: hoveredIndex ? 0 : -8 , width: hoveredIndex ? "auto" : "0px", height: hoveredIndex ? "auto" : "0px", marginLeft: hoveredIndex ? "5px" : "0px", overflow: "hidden", transition: { duration: 0.2 }}}
            className="text-xs font-bold">
        {text}
        </motion.span>
    </motion.a>
    );
}



export function ThemeToggleButton() {
    const [dark, setDark] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<boolean>(false);
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
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            dark ? "dark" : "light"
        );
    }, [dark]);

    return (
        <motion.a
            className="group w-auto h-auto m-2 p-3 rounded-[20px] text-(--bgc) bg-(--mode) text-lg text-center flex flex-row items-center justify-center"
            onClick={() => {
                setDark(prev => {
                    const next = !prev;
                    localStorage.setItem("theme", next ? "dark" : "light");
                    return next;
                });
            }}
            whileTap={{ scale: 0.95, rotate: -10 }}
            onHoverStart={() => setHoveredIndex(true)}
            onHoverEnd={() => setHoveredIndex(false)}
        >
            {dark ? (
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path></g></svg>
            )}
            <motion.span
                animate={{ opacity: hoveredIndex ? 1 : 0, x: hoveredIndex ? 0 : -8, width: hoveredIndex ? "auto" : "0px", height: hoveredIndex ? "auto" : "0px", marginLeft: hoveredIndex ? "5px" : "0px", overflow: "hidden", transition: { duration: 0.2 } }}
                className="text-xs font-bold">
                {dark ? "light mode" : "dark mode"}
            </motion.span>
        </motion.a>);
}



export function Container({ children }: { children: React.ReactNode }) {
    return (
        <motion.div className="rounded-[30px] border-2 bg-(--text)/10 w-full h-full"
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={{
                rest: {
                    opacity: 0.8,
                    scale: 0.95,

                    backgroundColor: 'color-mix(in srgb, var(--text) 10%, transparent)',
                    transition: {
                        duration: 2,
                        ease: [0.25, 1, 0.5, 1],
                    },
                },
                hover: {
                    opacity: 1,
                    scale: 1,
                    backgroundColor: 'color-mix(in srgb, var(--text) 60%, transparent)',
                    transition: {
                        duration: 0.2,
                        ease: "easeOut",
                    }
                },
        }}>
            {children}
        </motion.div>
    );
}

type ContainerProps = {
    children: React.ReactNode;
    isCentered?: boolean;
    isFitted?: boolean;
};

export function ContainerHiddenRow({ children, isCentered = false, isFitted = false }: ContainerProps) {
    return (
        <motion.div
            className={`flex flex-1 gap-3 flex-row ${isCentered ? "items-center justify-center" : ""} ${isFitted ? "h-fit w-fit" : "h-full w-full"}`}
        >
            {children}
        </motion.div>
    );
}

export function ContainerHiddenColumn({ children, isCentered = false, isFitted = false }: ContainerProps) {
    return (
        <motion.div
            className={`flex flex-1 gap-3 h-fit w-fit flex-col ${isCentered ? "items-center justify-center" : ""} ${isFitted ? "h-fit w-fit" : "h-full w-full"}`}
        >
            {children}
        </motion.div>
    );
}

type SeparatorProps = {
    orientation?: "horizontal" | "vertical";
    margin: number;
};

export function Separator({ orientation = "horizontal", margin = 0}: SeparatorProps) {
    const isHorizontal = orientation === "horizontal";

    return (
        <div
            className={`
                shrink-0
                m-${margin}
                ${isHorizontal
                    ? "w-full border-t border-(--text)"
                    : "h-auto min-h-[20px] border-l border-(--text) self-stretch"}
            `}
        ></div>
    );
}

export function Text({ text}:{text: string}) {
    return (
        <div className="w-auto h-20 flex items-center justify-center m-3">
            <motion.div className="text-2xl flex items-center justify-center w-70 h-20">
                {text}
            </motion.div>
        </div>
    );
}



interface VerticalMarqueeProps {
    children: React.ReactNode;
    speed?: number;
    direction?: 'up' | 'down';
    pauseOnHover?: boolean;
}



export default function VerticalMarquee({
    children,
    speed = 10,
    direction = 'up',
    pauseOnHover = true, }: VerticalMarqueeProps) {

    let letters = children?.toString().split("");

    function returnLetters(word : string[] | any) {
        let letAndSpaces = [];
        for (let a of word) {
            letAndSpaces.push(a);
            letAndSpaces.push(<br/>)
        }
        return letAndSpaces
    }

    return (
        <div className="bg-black h-full w-auto overflow-hidden border-4 border-gray-500 drop-shadow-[0_0_2px_white] filter">
            <motion.div
                animate={{
                    y: direction == 'up' ? ['100%', '-100%'] : ['-100%', '100%'],
                }}
                transition={{
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className="m-5 text-4xl flex flex-col items-center italic text-(--magenta)">
                {
                    returnLetters(letters)
                }
            </motion.div>
        </div>
    )
}


