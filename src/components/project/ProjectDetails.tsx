import ProjectMeta from "@/components/project/ProjectMeta";
import { satoshiBlack } from "@/components/utils/font";
import projectInfo from "@/components/utils/projectInfo";
import { AiFillGithub } from "react-icons/ai";
import { BsBroadcast } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";

interface Props {
  project: string;
}

const ProjectDetails = (props: Props) => {
  const { project } = props;

  const currentProject = projectInfo.get(project)!;
  const iconSize = 25;

  const paragraphs = Object.values(currentProject.paragraphs).map(
    (paragraph, index) => {
      return (
        <p className="paragraph" key={index}>
          {paragraph}
        </p>
      );
    }
  );

  return (
    <section className="flex flex-col gap-12 py-8">
      <header className="border-b-[1px] border-secondary/50">
        <span>{currentProject.icon}</span>
        <br></br>

        <h1 className={`${satoshiBlack.className} text-4xl lowercase`}>
          {currentProject.name}
        </h1>
        <br></br>

        <div className="py-4">
          <ProjectMeta
            icon={<HiOutlineCode size={iconSize} />}
            name="Stack"
            content={currentProject.stack}
          />
          {currentProject.source && (
            <ProjectMeta
              icon={<AiFillGithub size={iconSize} />}
              name="Source"
              content={currentProject.source}
            />
          )}

          {currentProject.website && (
            <ProjectMeta
              icon={<BsBroadcast size={iconSize} />}
              name="Website"
              content={currentProject.website}
            />
          )}
        </div>
      </header>

      {currentProject.video && (
        <video
          className="rounded-lg scale-[90%]"
          src={currentProject.video}
          autoPlay={true}
          loop={true}
          muted={false}
        ></video>
      )}

      <article className="flex flex-col gap-12 pb-4">{paragraphs}</article>
    </section>
  );
};

export default ProjectDetails;
