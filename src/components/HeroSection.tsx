import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl max-w-[15ch] text-center font-serif">
            Explore the perl of Kyrgyzstan.
          </h1>
          <p>The must-have place to visit for everyone</p>
        </div>
        <div className="flex justify-between w-3/5 max-w-[900px]">
          <HighlightItem title="Area" content="Near 6,236 km²" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Depth" content="Around 278 m" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Sea level" content="Close to 1,606 m" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Every Season" content="500,000+ tourist" />
        </div>
      </div>
    </section>
  );
};

const HighlightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="uppercase text-sm">{title}</span>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default HeroSection;
