"use client"
import "../globals.css";
import { AnimatePresence, motion } from "framer-motion";
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



export function VerticalMarquee({
    children,
    speed = 10,
    direction = 'up',
    pauseOnHover = true, }: VerticalMarqueeProps) {

    let letters = children?.toString().split("");

    function returnLetters(word : string[] | any) {
        let letAndSpaces = [];
        let b = "";
        for (let a of word) {

            if (a == ":" || a == "X" || a == ")" || a == "D" ) {
                if (b == "") {
                    b = a;
                    continue;
                }
                letAndSpaces.push(b, a, <br/>);
                continue;
            }
            letAndSpaces.push(a, <br/>);
        }
        return letAndSpaces
    }

    return (
        <div className="bg-black h-[calc(100%-5rem)] w-auto overflow-hidden border-4 border-gray-500 inset-shadow-[0_0_5px_grey] filter m-10">
            <motion.div
                animate={{
                    y: direction == 'up' ? ['100%', '-100%'] : ['-100%', '100%'],
                }}
                transition={{
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className="m-5 text-7xl flex flex-col text-center italic font-extrabold text-(--magenta)">
                {
                    returnLetters(letters)
                }
            </motion.div>
        </div>
    )
}


export function HorizontalArrow({ direction = "right", size = 64}) {
    const svg = direction === "right" ? <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>;

    return (
        <div className="h-full w-fit flex items-center ">
            <motion.div
                animate={{
                    x: ['0%', '20%', '0%'],
                }}
                transition={{
                    duration: 1,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className=' ' >
                {svg}
                </motion.div>
        </div>
    )
}

interface GithubReadmeWidgetProps {
  owner: string;
  repo: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

export function GithubReadmeWidget({ owner, repo, buttonLabel = 'View README', buttonClassName = '',}: GithubReadmeWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [markdown, setMarkdown] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const fetchReadme = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`,
                    {
                        headers: {
                            Accept: 'application/vnd.github.v3.raw',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Errore durante il recupero del README (${response.status})`);
                }

                const text = await response.text();
                setMarkdown(text);
            } catch (err: any) {
                setError(err.message || 'Si è verificato un errore');
            } finally {
                setLoading(false);
            }
        };

        fetchReadme();
    }, [isOpen, owner, repo]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const parseMarkdownToHtml = (md: string) => {
        if (!md) return '';

        let html = md
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

        .replace(/```([\s\S]*?)```/g, '<pre class="bg-(--text)/30 p-4 rounded-xl border border-slate-800 my-4 overflow-x-auto text-sm font-mono text-(--blue)"><code>$1</code></pre>')

        .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-sky-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')

        .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-(--text) mt-6 mb-2">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-(--text) mt-8 mb-3 pb-2 border-b bborder-(--blue)">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-extrabold text-(--text) mb-4 pb-2 border-b border-(--blue)">$1</h1>')

        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-100">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline">$1</a>')

        .replace(/^\s*[\-\*]\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-300 my-1">$1</li>')

        .replace(/\n\n/g, '<br/><br/>');

        return html;
    };

    return (<>
        <button
            onClick={() => setIsOpen(true)}
            className={
                buttonClassName || 'px-5 py-2.5 bg-(--bg) hover:bg-(--text)/20 border border-(--text) text-(--text) font-medium rounded-xl transition-all flex items-center gap-2'
            }
        >
            <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            {buttonLabel}
        </button>

        <AnimatePresence>
            {isOpen && ( <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-(--bg) backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                className="relative w-full max-w-4xl max-h-[85vh] bg-(--bgc)/40 border border-(--text)/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 text-(--text)"
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-(--text)/80">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-(--bgc)">README.md</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-(--bgc) text-(--magenta) font-mono border border-(--magenta)">
                        {owner}/{repo}
                        </span>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-lg text-(--bgc) hover:text-(--text) hover:bg-(--bgc) transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 leading-relaxed">
                    {loading && (
                        <div className="flex justify-center items-center py-20 text-(--text)">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-(--magenta) mr-3" />
                            Loading README...
                        </div>
                    )}

                    {error && ( <div className="p-4 bg-(--magenta) border border-(--bgc) text-(--bgc) rounded-xl text-center"> {error} </div>)}

                    {!loading && !error && (
                        <div
                            className="space-y-2 text-(--text)"
                            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(markdown) }}
                        />
                    )}
                </div>

                <div className="px-6 py-3 border-t border-(--text)/80 bg-(--text)/80 flex justify-end">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-sm font-medium bg-(--bgc) hover:bg-(--bgc)/50 text-(--text) rounded-xl transition-colors"
                    >
                    Chiudi
                    </button>
                </div>
                </motion.div>
            </div>
        )}
        </AnimatePresence>
    </>);
}
