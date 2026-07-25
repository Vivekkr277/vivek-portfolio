import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

import { Section, Container } from "@layout";
import {
  SectionHeading,
  Card,
  Icon,
} from "@ui";

import experience from "@data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          label="EXPERIENCE"
          title="Professional Journey"
          description="Building scalable applications and solving business problems through modern software development."
        />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

                  <div className="flex-1">

                    <div className="flex items-center gap-4">
                      <Icon
                        icon={FiBriefcase}
                        variant="glass"
                      />

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {job.role}
                        </h3>

                        <p className="text-blue-400">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-zinc-400">

                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        {job.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {job.location}
                      </div>

                    </div>

                    <ul className="mt-8 space-y-3 text-zinc-300">
                      {job.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}