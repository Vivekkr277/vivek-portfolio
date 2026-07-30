import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

import { Section, Container } from "@layout";
import {
  Display,
  Paragraph,
  GradientText,
  Button,
  Badge,
  Counter,
  FloatingBadge,
} from "@ui";

import personal from "@data/personal";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <Badge>Available for Freelance</Badge> */}

            <Display className="mt-6">
              Hi, I'm <GradientText>{personal.name}</GradientText>
            </Display>

            <Paragraph className="mt-4 text-lg text-blue-400">
              {personal.title}
            </Paragraph>

            <Paragraph className="mt-8 max-w-xl lg:mx-0 mx-auto">
              {personal.description}
            </Paragraph>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button as="a" href="#projects">
                View Projects
                <FiArrowRight className="ml-2" />
              </Button>

              <Button as="a" href={personal.resume} variant="secondary">
                <FiDownload className="mr-2" />
                Resume
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              {personal.stats.map((item) => (
                <Counter
                  key={item.label}
                  end={item.value}
                  suffix={item.suffix}
                  title={item.label}
                />
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 blur-3xl" />

              <div className="relative overflow-visible rounded-3xl border border-white/10 bg-zinc-900 p-2">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="h-[520px] w-full rounded-3xl object-cover"
                />

                {/* <FloatingBadge className="-left-6 top-8">
                  Reactjs
                </FloatingBadge>

                <FloatingBadge className="-right-6 top-24">
                  Nodejs
                </FloatingBadge>

                <FloatingBadge className="-left-6 bottom-20">
                  MySQL
                </FloatingBadge>

                <FloatingBadge className="-right-6 bottom-10">
                  REST API
                </FloatingBadge> */}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
