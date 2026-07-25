import MainLayout from "@layouts/MainLayout";
import { Hero,About ,Services ,Projects , Experience,Contact,Testimonials} from "@sections";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Testimonials/>
       <Contact />
    </MainLayout>
  );
}