"use client"
import { useRef } from "react";
import { Container, ContainerHiddenRow, ContainerHiddenColumn, InvisibleTextNotHovered } from "./widgets/components";
import { motion } from "framer-motion";
import { SushiLanguage } from "./widgets/LAndF";

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
      <ContainerHiddenColumn isFitted={true}>

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
      <ContainerHiddenColumn isFitted={true}>
        <ContainerHiddenRow isFitted={true}>
          <h1 className="text-3xl h-30 w-full flex justify-start items-end">My menu:</h1>
        </ContainerHiddenRow>
        <ContainerHiddenColumn>
          <Container>
            <InvisibleTextNotHovered text="For the web"></InvisibleTextNotHovered>
            <ContainerHiddenRow isCentered={true}>
              <ContainerHiddenColumn isCentered={true}>
                <SushiLanguage svg="HTML" text="" href=""></SushiLanguage>
                <SushiLanguage svg="CSS" text="" href=""></SushiLanguage>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true}>
                <SushiLanguage svg="JavaScript" text="" href=""></SushiLanguage>
                <SushiLanguage svg="TypeScript" text="" href=""></SushiLanguage>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true}>
                <SushiLanguage svg="Next.js" text="" href=""></SushiLanguage>
                <SushiLanguage svg="Framer Motion" text="" href=""></SushiLanguage>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true}>
                <SushiLanguage svg="React" text="" href=""></SushiLanguage>
                <SushiLanguage svg="Tailwind" text="" href=""></SushiLanguage>
              </ContainerHiddenColumn>
            </ContainerHiddenRow>
          </Container>
          <ContainerHiddenRow>
            <Container>
            <InvisibleTextNotHovered text="For apps"></InvisibleTextNotHovered>
            <ContainerHiddenRow isCentered={true}>
                <SushiLanguage svg="Dart" text="" href=""></SushiLanguage>
                <SushiLanguage svg="Flutter" text="" href=""></SushiLanguage>
            </ContainerHiddenRow>
          </Container>
          <Container>
            <InvisibleTextNotHovered text="IDEs"></InvisibleTextNotHovered>
            <ContainerHiddenRow isCentered={true}>
                <SushiLanguage svg="VS Codium" text="" href=""></SushiLanguage>
                <SushiLanguage svg="JetBrains" text="" href=""></SushiLanguage>
            </ContainerHiddenRow>
          </Container>
          </ContainerHiddenRow>
        </ContainerHiddenColumn>
      </ContainerHiddenColumn>

    </motion.div>
  );
}
