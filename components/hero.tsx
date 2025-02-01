import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto items-center text-center">
        <div className="mb-5 flex items-center justify-center">
          <Image
            className="block dark:hidden"
            src="/ollmao_icon.svg"
            alt="Ollmao"
            width={200}
            height={200}
          />
          <Image
            className="hidden dark:block"
            src="/ollmao_icon_dark.svg"
            alt="Ollmao"
            width={200}
            height={200}
          />
        </div>
        <h1 className="mb-6 mt-8 text-5xl font-bold text-foreground">
          Run AI Models on Your Mac with Ollmao
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Integrate with Ollama to run powerful AI models like LLaMA and
          DeepSeek, right on your Mac.
        </p>
        <Link href="https://github.com/LinkScapeOfficial/releases/latest/download/ollmao-universal.dmg">
          <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black">
            <FaApple className="mr-1" />
            Download for Mac
          </Button>
        </Link>
      </div>
    </section>
  );
}
