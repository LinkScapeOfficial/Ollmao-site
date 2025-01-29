import Hero from "@/components/hero";
import Features from "@/components/features";
import Download from "@/components/download";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Download />
    </div>
  );
}
