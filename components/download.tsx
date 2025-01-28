import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <section id="download" className="bg-black py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 text-xl">
          Download Ollmao for your Mac and start exploring the power of AI
          models.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-black hover:bg-gray-200"
        >
          Download for Mac
        </Button>
      </div>
    </section>
  );
}
