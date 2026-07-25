import { Section, Container } from "@layout";
import { SectionHeading } from "@ui";

import projects from "@data/projects";
import { ProjectCard } from "@components/project";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="A selection of projects showcasing my experience in building scalable, modern, and user-friendly web applications."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}