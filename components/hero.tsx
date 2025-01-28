import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto items-center text-center">
        <div className="mb-5 flex items-center justify-center">
          <Image
            className="block dark:hidden"
            src="/ollmao.svg"
            alt="Ollmao"
            width={65}
            height={65}
          />
          <Image
            className="hidden dark:block"
            src="/ollmao_dark.svg"
            alt="Ollmao"
            width={65}
            height={65}
          />
        </div>
        <h1 className="mb-6 text-5xl font-bold text-foreground">
          Run AI Models on Your Mac with Ollmao
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Integrate with Ollama to run powerful AI models like Llama and
          DeepSeek, right on your Mac.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black">
          <FaApple className="mr-1" />
          Download for Mac
        </Button>
      </div>
    </section>
  );
}
