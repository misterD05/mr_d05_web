"use client"
import { useRef } from "react";
import { Container, ContainerHiddenRow, ContainerHiddenColumn, Text, Separator } from "./widgets/components";
import { motion } from "framer-motion";
import { SushiLanguage } from "./widgets/LAndF";
import { CpuChip } from "../public/cpuAnimated";
import Emoji from "react-emoji-render";

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
      className="flex gap-3 flex-row w-full min-h-[100dvh] bg-(--bgc) text-(--text) gap-5 pl-15 p-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">

      <ContainerHiddenRow isFitted={true}>

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
            <div className="text-4xl h-10 w-full flex justify-start items-end">My menu ➡️➡️➡️</div>
        </h2>
        <div className="h-full w-full items-end justify-start mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CpuChip color="color-mix(in srgb, var(--blue) 80%, var(--acqua) 20%)"></CpuChip>
          </motion.div>
        </div>
    </ContainerHiddenColumn>

    <ContainerHiddenColumn isFitted={true}>
        <ContainerHiddenColumn isFitted={true}>
          <ContainerHiddenColumn>
            <Container><Text text="For the web"></Text></Container>
            <ContainerHiddenRow isCentered={true} >
              <ContainerHiddenColumn isCentered={true} isFitted={true}>
                <Container><SushiLanguage svg="HTML" text="" href=""></SushiLanguage></Container>
                <Container><SushiLanguage svg="CSS" text="" href=""></SushiLanguage></Container>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true} isFitted={true}>
                <Container><SushiLanguage svg="JavaScript" text="" href=""></SushiLanguage></Container>
                <Container><SushiLanguage svg="TypeScript" text="" href=""></SushiLanguage></Container>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true} isFitted={true}>
                <Container><SushiLanguage svg="Next.js" text="" href="https://nextjs.org/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="Framer Motion" text="" href="https://www.framer.com"></SushiLanguage></Container>
              </ContainerHiddenColumn>
              <ContainerHiddenColumn isCentered={true} isFitted={true}>
                <Container><SushiLanguage svg="React" text="" href="https://react.dev/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="Tailwind" text="" href="https://tailwindcss.com/"></SushiLanguage></Container>
              </ContainerHiddenColumn>
            </ContainerHiddenRow>
          </ContainerHiddenColumn>

          <Separator orientation="horizontal" margin={0}></Separator>

          <ContainerHiddenRow isFitted={true}>
          <ContainerHiddenColumn isFitted={true}>
            <Container><Text text="For apps"></Text></Container>
            <ContainerHiddenRow isCentered={true}>
                <Container><SushiLanguage svg="Dart" text="" href="https://dart.dev/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="Flutter" text="" href="https://flutter.dev/"></SushiLanguage></Container>
                </ContainerHiddenRow>
                <ContainerHiddenRow isCentered={true}>
                <Container><SushiLanguage svg="Vite" text="" href="https://vite.dev/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="Electron" text="" href="https://www.electronjs.org/"></SushiLanguage></Container>
            </ContainerHiddenRow>
          </ContainerHiddenColumn>
          <Separator orientation="vertical" margin={0}></Separator>
          <ContainerHiddenRow isCentered={true} isFitted={true}>
            <ContainerHiddenColumn isFitted={true}>
            <Container><Text text="For backend"></Text></Container>
            <ContainerHiddenRow isCentered={true}>
                <Container><SushiLanguage svg="Docker" text="" href="https://www.docker.com/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="XAMPP" text="" href="https://www.apachefriends.org/it/index.html"></SushiLanguage></Container>
            </ContainerHiddenRow>
            <ContainerHiddenRow isCentered={true}>
                <Container><SushiLanguage svg="Node.js" text="" href="https://nodejs.org/en"></SushiLanguage></Container>
                <Container><SushiLanguage svg="MySQL" text="" href=""></SushiLanguage></Container>
            </ContainerHiddenRow>
          </ContainerHiddenColumn>
        </ContainerHiddenRow>
          </ContainerHiddenRow>
        </ContainerHiddenColumn>
    </ContainerHiddenColumn>

    <Separator orientation="vertical" margin={0}></Separator>

        <ContainerHiddenColumn isFitted={true}>
            <ContainerHiddenColumn isFitted={true}>
            <Container><Text text="IDEs"></Text></Container>
            <ContainerHiddenRow isCentered={true}>
                <Container><SushiLanguage svg="VS Codium" text="" href="https://vscodium.com/"></SushiLanguage></Container>
                <Container><SushiLanguage svg="JetBrains" text="" href="https://www.jetbrains.com/"></SushiLanguage></Container>
            </ContainerHiddenRow>
        </ContainerHiddenColumn>

        <ContainerHiddenColumn isFitted={true}>
            <Container><Text text="Other languages"></Text></Container>
            <ContainerHiddenRow isCentered={true}>
              <Container><SushiLanguage svg="C" text="" href=""></SushiLanguage></Container>
              <Container><SushiLanguage svg="Rust" text="" href=""></SushiLanguage></Container>
              <Container><SushiLanguage svg="PHP" text="" href=""></SushiLanguage></Container>
            </ContainerHiddenRow>
            <ContainerHiddenRow isCentered={true}>
              <Container><SushiLanguage svg="Java" text="" href=""></SushiLanguage></Container>
              <Container><SushiLanguage svg="C++" text="" href=""></SushiLanguage></Container>
              <Container><SushiLanguage svg="Python" text="" href=""></SushiLanguage></Container>
            </ContainerHiddenRow>
          </ContainerHiddenColumn>




        </ContainerHiddenColumn>
      </ContainerHiddenRow>



    </motion.div>
  );
}
