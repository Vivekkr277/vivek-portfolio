import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCode, FiDownload } from "react-icons/fi";

import { Section, Container } from "@layout";
import {
  SectionHeading,
  Paragraph,
  Button,
  Badge,
  Icon,
} from "@ui";

const skills = [
  "React",
  "ASP.NET Core",
  "Node.js",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Entity Framework",
  "REST API",
  "Git",
  "Azure",
];

const highlights = [
  {
    icon: FiBriefcase,
    title: "2+ Years Experience",
    text: "Building enterprise-grade web applications.",
  },
  {
    icon: FiCode,
    title: "20+ Projects",
    text: "From business websites to ERP systems.",
  },
  {
    icon: FiAward,
    title: "Full Stack Developer",
    text: "Frontend, Backend & Database development.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          label="ABOUT ME"
          title="Turning Ideas into Scalable Digital Products"
          description="I'm a Full Stack Developer passionate about creating modern, fast and user-focused applications using React, ASP.NET Core, Node.js and SQL Server."
        />

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
              <img
                src="/images/profile.png"
                alt="Vivek Kumar"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Paragraph>
              I specialize in building high-performance web applications,
              enterprise software, and scalable backend systems. My focus is
              writing clean, maintainable code while delivering exceptional
              user experiences.
            </Paragraph>

            <div className="mt-10 space-y-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <Icon
                    icon={item.icon}
                    variant="glass"
                  />

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-10">
              <Button>
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}