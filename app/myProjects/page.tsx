import VerticalMarquee  from "../widgets/components";

export default function MyProjects() {
  return (
    <div className="flex items-center w-auto h-auto justify-center bg-(--bgc) text-(--text)">
      <VerticalMarquee speed={5}>Projects</VerticalMarquee>
      <main className="flex flex-row items-center">


      </main>
    </div>
  );
}
