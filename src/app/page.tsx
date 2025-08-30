import ClientTestimonial from "@/components/ClientTestimonial";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";
import ThemeHandler from "@/components/ThemeHandler";
import VideoWisdom from "@/components/VideoWisdom";

export default function Home() {
  return (
 <div>
  <ThemeHandler />
  <Hero />
  <Guide />
  <Services />
  <VideoWisdom />
  <ClientTestimonial/>
  <Promotion />
 </div>
  );
}
