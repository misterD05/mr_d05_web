"use client"
import { useRef } from "react";
import { Container, ContainerHiddenRow, ContainerHiddenColumn } from "../widgets/components";
import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <motion.div
      className="flex flex-row w-full min-h-[100dvh] bg-(--bgc) text-(--text) gap-5  p-10 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      <ContainerHiddenRow isFitted={true} isCentered={true}>
        <div className="flex flex-col items-center">
          <div
            className="relative flex items-center justify-center rounded-full border-4 border-(--text)/60 p-1 bg-black/5 shadow-md m-10 mr-20"
            style={{ width: 450, height: 450 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/157386570?v=4"
                alt="profile-picture"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <h1 className="text-3xl italic text-center text-(--blue)">¨Any sufficiently advanced technology <br /> is indistinguishable from magic.¨</h1>
        </div>

        <ContainerHiddenColumn isFitted={true}>
        <img className="rounded-[30px] border-4 border-(--text)/60 w-250 " src="https://github-stats-dashboard-xi.vercel.app/api/hexagonalStats/misterD05/yellow"></img>
        <img className="rounded-[30px] border-4 border-(--text)/60 w-250" src="https://github-stats-dashboard-xi.vercel.app/api/donutLanguages/misterD05"></img>
      </ContainerHiddenColumn>
      </ContainerHiddenRow>

    </motion.div>
  );
}
