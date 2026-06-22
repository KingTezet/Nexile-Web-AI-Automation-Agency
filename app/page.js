import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Gateway from "@/components/sections/Gateway";
import LogoTicker from "@/components/sections/LogoTicker";
import VisionBento from "@/components/sections/VisionBento";
import AvatarGrid from "@/components/sections/AvatarGrid";
import StoryCards from "@/components/sections/StoryCards";
import Marketplace from "@/components/sections/Marketplace";
import Pricing from "@/components/sections/Pricing";
import Founder from "@/components/sections/Founder";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] text-gray-900">
      <Hero />
      <Showcase />
      <Gateway />
      <LogoTicker />
      <VisionBento />
      <AvatarGrid />
      <StoryCards />
      <Marketplace />
      <Pricing />
      <Founder />
    </main>
  );
}