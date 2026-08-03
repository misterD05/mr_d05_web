import {Container, ContainerHiddenColumn, HorizontalArrow, VerticalMarquee}  from "../widgets/components";

export default function MyProjects() {
  return (
    <div className="flex flex-row gap-0 items-center w-screen h-screen justify-start bg-(--bgc) text-(--text)">
      <VerticalMarquee speed={5}>Projects XD</VerticalMarquee>
      <HorizontalArrow direction="right" size={200}></HorizontalArrow>
      <main className="flex flex row items-center">
        <ContainerHiddenColumn isCentered={true} isFitted={true}>
          <Container>CIao</Container>
          <Container>CIao</Container>
        </ContainerHiddenColumn>

      </main>
    </div>
  );
}
