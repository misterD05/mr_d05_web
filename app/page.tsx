"use client"
import { useRef } from "react";
import { Container, ContainerHiddenRow, ContainerHiddenColumn } from "./widgets/components";
import { motion } from "framer-motion";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault(); // blocca scroll verticale
    scrollRef.current?.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      ref={scrollRef}
      onWheel={onWheel}
      className="flex gap-3 flex-row w-full min-h-[100dvh] bg-(--bgc) text-(--text) gap-5  p-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      <ContainerHiddenColumn>

        <br />
        <br />
        <h1 className="text-8xl">
          Hi, I'm
        </h1>
        <h1 className="bg-gradient-to-r from-(--blue) to-(--acqua) bg-clip-text text-transparent text-8xl">
          misterD05
        </h1>
        <br />
        <h2 className="text-4xl">
          Programming and building things just for fun
          <br />
          <br />
          What to add here ?
        </h2>
        <div className="h-full w-full items-end justify-start mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <object
              type="image/svg+xml"
              data="/cpu-wnw.svg"
              width={350}
              height={350}
              className="pointer-events-none"
            />
          </motion.div>
        </div>
      </ContainerHiddenColumn>
      <ContainerHiddenColumn>
        <ContainerHiddenRow>
          <h1 className="text-3xl h-30 w-full flex justify-start items-end">My menu:</h1>
        </ContainerHiddenRow>
        
      </ContainerHiddenColumn>

    </motion.div>
  );
}
