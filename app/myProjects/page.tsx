import {Container, ContainerHiddenColumn, DirectoryProject, GithubReadmeWidget, HorizontalArrow, VerticalMarquee}  from "../widgets/components";
import projectsInfos from "../../public/projectsInfo.json";

interface DataResponse{
    name : string,
    description : string,
    languagesAndTools : string[],
    link: string,
    image : string,
}


export default function MyProjects() {
  let list = Object.values(projectsInfos.projects) as DataResponse[];
  let listObjects = [];

  let smallList = [];
  for (let el of list) {
    smallList.push(el);
    if (smallList.length == 2 || list.indexOf(el) == list.length - 1) {
      listObjects.push(smallList);
      smallList = [];
    }
  }

  return (
    <div className="flex flex-row gap-0 items-center w-screen h-screen justify-start bg-(--bgc) text-(--text)">
      <VerticalMarquee speed={5}>Projects XD</VerticalMarquee>
      <HorizontalArrow direction="right" size={200}></HorizontalArrow>
      <main className="flex flex row items-center">
        <ContainerHiddenColumn isCentered={true} isFitted={true}>
          {
            listObjects.map((couple, index) => (
              <ContainerHiddenColumn isCentered={true} isFitted={true} key={index}>
                {couple.map((el, index) => (

                    <DirectoryProject repo={el.name} key={index}></DirectoryProject>

                ))}
              </ContainerHiddenColumn>
          ))}
        </ContainerHiddenColumn>

      </main>
    </div>
  );
}
