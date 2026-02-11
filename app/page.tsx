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
      <Container><h1>TODO my website .... coming soon</h1></Container>
      <ContainerHiddenColumn>
          <Container><h1>hellooo</h1></Container>
          <Container><h1>hellooo</h1></Container>
      </ContainerHiddenColumn>
      <ContainerHiddenColumn>
          <Container><h1>hellooo</h1></Container>
      </ContainerHiddenColumn>
      <ContainerHiddenColumn>
          <ContainerHiddenRow><Container><h1>hellooo</h1></Container><Container><h1>hellooo</h1></Container></ContainerHiddenRow>
          <Container><h1>hellooo</h1></Container>
      </ContainerHiddenColumn>
      <ContainerHiddenColumn>
          <Container><h1>hellooo</h1></Container>
          <Container><h1>hellooo</h1></Container>
      </ContainerHiddenColumn>
    </motion.div>
  );
}
