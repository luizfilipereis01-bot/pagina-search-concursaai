import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Features } from "@/components/features";
import { VideoShowcase } from "@/components/video-showcase";
import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MatrixRain } from "@/components/matrix-rain";
import { Scanlines, Noise } from "@/components/overlays";

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <MatrixRain />
      <Scanlines />
      <Noise />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-[3]">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <VideoShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
