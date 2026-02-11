"use client"
import { useRef } from "react";
import { Container, ContainerHiddenRow, ContainerHiddenColumn } from "../widgets/components";
import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <motion.div
      className="flex gap-3 flex-row w-full min-h-[100dvh] bg-(--bgc) text-(--text) gap-5  p-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      <Container><h1 className="w-20 h-auto">TODO about me... add information about me and my skills</h1></Container>
      <ContainerHiddenColumn>
        <Container><h1>My github stats</h1></Container>
        <Container><img src="https://github-stats-dashboard-xi.vercel.app/api/donutLanguages/misterD05"></img></Container>
      </ContainerHiddenColumn>
    </motion.div>
  );
}
