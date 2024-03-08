import Heading, { black } from "@/components/Heading";
import Section from "@/components/Section";
import projectInfo from "@/components/utils/projectInfo";
import Link from "next/link";
import { Dot } from "lucide-react";
import LinkIcon from "./LinkIcon";

const Projects = () => {
  const projectData = Array.from(projectInfo).map(([_key, value], i) => {
    return {
      id: i,
      link: value.website?.href,
      progress: value.progress,
      name: value.key,
      img: value.img,
      stack: value.stack,
      title: value.title,
      domain: value.domain,
      description: value.description,
      prevIcon: value.prevIcon,
      icon: value.icon,
      emoji: value.emoji,
      tags: value.tags,
    };
  });

  const projects = projectData.map((project) => {
    const masonry =
      project.id % 2 !== 0
        ? "flex justify-center w-full sm:ml-auto sm:ml-0 sm:top-12 "
        : "";
    const name = project.name.toLowerCase();

    return (
      <figure
        key={project.id}
        className={`border border-[#ffffff36] bg-card rounded-lg mb-4 animation sm:max-w-[18.75rem] relative  ${masonry}`}
      >
        <div>
          <div className="0 rounded-lg transition-all p-4 flex flex-col gap-8">
            <div>
              <div className="flex flex-col xl:flex-row gap-2 xl:justify-start xl:items-center items-start justify-center">
                <div className="flex flex-row items-center gap-2">
                  {project.prevIcon ? (
                    project.prevIcon
                  ) : project.emoji ? (
                    <div>{project.emoji}</div>
                  ) : null}
                  <Link
                    scroll={false}
                    href={`/project/${name}#apps`}
                    id={project.id.toString()}
                    className={`${black} hover:opacity-80 underline line-clamp-1 tracking-wide text-2xl font-bold`}
                  >
                    {project.title}
                  </Link>
                </div>

                <div className="flex flex-row items-center">
                  {project.progress === "Building" ? (
                    <>
                      <Dot className="text-yellow-400 w-8 h-8" /> Building
                    </>
                  ) : project.progress === "Shipped" ? (
                    <>
                      <Dot className="text-green-400 w-8 h-8" /> Shipped
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="opacity-60">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags?.map((tag) => (
                  <div className="transition-all hover:opacity-80 bg-secondary/20 rounded-lg px-2 py-1 text-xs">
                    #{tag}
                  </div>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-base hover:font-bold hover:underline items-center flex flex-row gap-1"
                >
                  <LinkIcon />
                  {project.domain}
                </Link>
              )}
            </div>
          </div>
        </div>
      </figure>
    );
  });

  return (
    <Section sectionName="apps" className="spacing xl:h-[110vh]">
      <article className="flex flex-col gap-24 w-full">
        <Heading text="Most Popular Apps and Tools." />

        <ul className="grid grid-cols-1 gap-8 max-w-2xl sm:grid-cols-2">
          {projects}
        </ul>
      </article>
    </Section>
  );
};

export default Projects;
