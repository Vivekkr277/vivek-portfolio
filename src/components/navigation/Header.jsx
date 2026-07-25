import { useEffect, useState } from "react";
import { FiDownload, FiMenu } from "react-icons/fi";

import { Container } from "@layout";
import { Button } from "@ui";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import personal from "@data/personal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <button
              onClick={() => handleNavigate("home")}
              className="text-2xl font-bold tracking-tight text-white"
            >
              Vivek
              <span className="text-blue-500">.</span>
            </button>

            <NavLinks
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            <div className="hidden lg:block">
              <Button
                as="a"
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </div>

            <button
              className="text-white lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
