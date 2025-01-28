import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Download from "@/components/download";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
