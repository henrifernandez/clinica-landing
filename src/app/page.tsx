import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Treatments } from "@/components/sections/Treatments";
import { Results } from "@/components/sections/Results";
import { Method } from "@/components/sections/Method";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Stats />
        <Treatments />
        <Method />
        <Results />
        <Team />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
