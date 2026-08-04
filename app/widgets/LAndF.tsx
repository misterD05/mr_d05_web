"use client"
import { useState } from "react";
import "../globals.css";
import { motion } from "framer-motion";


type SushiProps = {
    text: string;
    svg: string;
    href: string;
    dimension: number;
    toggle?: Function;
    state?: boolean;
};

export const techIcons: Record<string, string> = {
    // --- LINGUAGGI DI PROGRAMMAZIONE ---
    "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "C": "https://cdn.simpleicons.org/c/A8B9CC",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "C#": "https://cdn.simpleicons.org/csharp/239120",
    "Go": "https://cdn.simpleicons.org/go/00ADD8",
    "PHP": "https://cdn.simpleicons.org/php/777BB4",
    "Rust": "https://cdn.simpleicons.org/rust/000000",
    "Ruby": "https://cdn.simpleicons.org/ruby/CC342D",
    "Swift": "https://cdn.simpleicons.org/swift/F05138",
    "Kotlin": "https://cdn.simpleicons.org/kotlin/7F52FF",
    "Dart": "https://cdn.simpleicons.org/dart/0175C2",
    "HTML": "https://cdn.simpleicons.org/html5/E34F26",
    "CSS": "https://cdn.simpleicons.org/css/1572B6",

    // --- MOBILE & CROSS-PLATFORM ---
    "Flutter": "https://cdn.simpleicons.org/flutter/02569B",
    "React Native": "https://cdn.simpleicons.org/react/61DAFB",
    "Android": "https://cdn.simpleicons.org/android/3DDC84",
    "Electron": "https://cdn.simpleicons.org/electron",
    "iOS": "https://cdn.simpleicons.org/apple/000000",

    // --- FRONTEND & WEB ---
    "React": "https://cdn.simpleicons.org/react/61DAFB",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
    "Vite": "https://cdn.simpleicons.org/vite",
    "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    "Angular": "https://cdn.simpleicons.org/angular/DD0031",
    "Svelte": "https://cdn.simpleicons.org/svelte/FF3E00",
    "Astro": "https://cdn.simpleicons.org/astro/FF5D01",
    "Tailwind": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",

    // --- BACKEND & DATABASE ---
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "Express": "https://cdn.simpleicons.org/express/000000",
    "Bun": "https://cdn.simp1leicons.org/bun/000000",
    "Deno": "https://cdn.simpleicons.org/deno/000000",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
    "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
    "SQLite": "https://cdn.simpleicons.org/sqlite/003B57",
    "Redis": "https://cdn.simpleicons.org/redis/DC382D",
    "Firebase": "https://cdn.simpleicons.org/firebase/FFCA28",
    "GraphQL": "https://cdn.simpleicons.org/graphql/E10098",
    "Prisma": "https://cdn.simpleicons.org/prisma/2D3748",

    // --- DEVOPS, CLOUD & TOOLS ---
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",
    "XAMPP": "https://cdn.simpleicons.org/xampp",
    "Kubernetes": "https://cdn.simpleicons.org/kubernetes/326CE5",
    "AWS": "https://cdn.simpleicons.org/amazonaws/232F3E",
    "Git": "https://cdn.simpleicons.org/git/F05032",
    "GitHub": "https://cdn.simpleicons.org/github/181717",
    "VS Codium": "https://cdn.simpleicons.org/vscodium/007ACC",
    "JetBrains": "https://cdn.simpleicons.org/jetbrains",
    "Figma": "https://cdn.simpleicons.org/figma/F24E1E",

    // --- OS ---
    "Cachy": "https://cdn.simpleicons.org/cachyos",
    "Fedora": "https://cdn.simpleicons.org/fedora",
};

export function SushiLanguage({ text, svg, href="", dimension = 25, toggle = ()=>{}}: SushiProps) {
    if(href != ""){
    return (
        <motion.a
            className="rounded-[20px]"
            href={href}
            whileTap={{ scale: 0.95}}
        >
            <img
            src={techIcons[svg]}
            alt={text}
            className={`w-${dimension} h-${dimension} m-${dimension/5}`}
            />
        </motion.a>
    );
} else {
    return (
        <motion.button
            className="rounded-[20px] "
            onClick={()=>toggle()}
        >
            <img
            src={techIcons[svg]}
            alt={text}
            className={`w-${dimension} h-${dimension} m-${dimension/5}`}
            />
        </motion.button>
    );
    }
}


/*
/Java
/C
/Python
/PHP
/Dart
/ Typescript
/ Javascript
/Rust

/React
/Flutter
/Taillwind
/FramerMotion


/HTML
/CSS


JSON
MSGPACK

docker
node
xampp
mysql


word
excell
powerpoint
canva
SVGator
github

/VSCodium
/JetBrains


my languages
*/
