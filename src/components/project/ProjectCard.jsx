import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Card, Badge, Button } from "@ui";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden p-0">
        {/* Project Image */}
        <Link to={`/projects/${project.slug}`}>
          <div className="aspect-video overflow-hidden bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="p-6">
          <Link to={`/projects/${project.slug}`}>
            <h3 className="text-2xl font-bold text-white transition group-hover:text-blue-400">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 leading-7 text-zinc-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <Button
                as="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <FiArrowUpRight className="ml-2" />
              </Button>
            )}

            {project.github && (
              <Button
                as="a"
                href={project.github}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}