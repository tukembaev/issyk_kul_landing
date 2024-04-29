import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Section from "@/components/Section";

import BgOverview from "@/../public/bg-overview.jpeg";
import BgHistory from "@/../public/bg-tourism.jpeg";
import BgFlora from "@/../public/bg-flora.jpg";
import BgTourism from "@/../public/bg-history.jpeg";
import BgFood from "@/../public/bg-food.jpeg";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Section
  image={BgOverview}
  tag="Issyk-Kul Lake"
  title="Explore the beauty of Issyk-Kul Lake."
  description="Feel the freedom to explore the breathtaking landscapes surrounding Issyk-Kul Lake. The world opens up to you, and every corner around the lake invites you to unforgettable adventures."
/>
<Section
  image={BgHistory}
  tag="History and Culture"
  title="Immerse yourself in the history and culture of Issyk-Kul Lake."
  description="Explore the rich cultural heritage and historical landmarks around Issyk-Kul Lake. Travel with family or solo, soaking in the unique atmosphere of this amazing place."
/>
<Section
  image={BgFlora}
  tag="Natural Wonders"
  title="Discover the natural wonders around Issyk-Kul Lake."
  description="Immerse yourself in the captivating natural landscapes and unique flora and fauna around Issyk-Kul Lake. Relax on its beaches and explore its surroundings, savoring every moment in harmony with nature."
/>
<Section
  image={BgTourism}
  tag="Tourism and Leisure"
  title="Relax and enjoy every moment around Issyk-Kul Lake."
  description="Transform your leisure into an unforgettable experience with exquisite views, sounds, and atmosphere of Issyk-Kul Lake. Enjoy the harmony with nature and feel inspired while exploring the beautiful places around the lake."
/>
<Section
  image={BgFood}
  tag="Cuisine"
  title="Savor the flavors of Issyk-Kul cuisine."
  description="Indulge in the delightful culinary delights of Issyk-Kul, from traditional dishes to modern interpretations. Experience the unique flavors and spices that make Issyk-Kul cuisine a gastronomic adventure."
/>
    </main>
  );
}
