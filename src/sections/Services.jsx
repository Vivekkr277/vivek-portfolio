import { motion } from "framer-motion";
import {
  FiCode,
  FiGlobe,
  FiDatabase,
  FiSmartphone,
  FiCloud,
  FiLayers,
} from "react-icons/fi";

import { Section, Container } from "@layout";
import { SectionHeading, Card, Icon } from "@ui";

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    description:
      "Modern, fast and responsive web applications using React, ASP.NET Core and Node.js.",
  },
  {
    icon: FiDatabase,
    title: "Backend Development",
    description:
      "REST APIs, authentication, SQL Server, MySQL, MongoDB and scalable architectures.",
  },
  {
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Professional websites for startups, schools, clinics and local businesses.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive UI",
    description:
      "Pixel-perfect interfaces optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: FiCloud,
    title: "Deployment",
    description:
      "Deploy applications on Vercel, Render, IIS and cloud platforms with CI/CD.",
  },
  {
    icon: FiLayers,
    title: "Custom Software",
    description:
      "ERP, CRM, HRMS and custom enterprise solutions tailored to business needs.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          label="SERVICES"
          title="What I Can Build"
          description="I help startups and businesses transform ideas into reliable, scalable software."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="h-full p-8">
                <Icon
                  icon={service.icon}
                  size="lg"
                  variant="glass"
                />

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}