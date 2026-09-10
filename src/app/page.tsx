import { Features } from "@/components/landing/Features";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Personas } from "@/components/landing/Personas";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { PromiseSection } from "@/components/landing/PromiseSection";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Showcase } from "@/components/landing/Showcase";
import { Trust } from "@/components/landing/Trust";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="atmosphere flex-1">
        <Hero />
        <Showcase />
        <ProblemSolution />
        <PromiseSection />
        <Features />
        <Personas />
        <HowItWorks />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
