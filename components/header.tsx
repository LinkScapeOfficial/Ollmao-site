import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-background px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">
            <Image
              className="mr-3 block dark:hidden"
              src="/ollmao.svg"
              alt="Ollmao"
              width={100}
              height={100}
            />
            <Image
              className="mr-3 hidden dark:block"
              src="/ollmao_dark.svg"
              alt="Ollmao"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Link
          href="https://github.com/LinkScapeOfficial/Ollmao"
          target="_blank"
        >
          <Button variant="outline">
            <FaGithub />
            GitHub
          </Button>
        </Link>
      </div>
    </header>
  );
}
