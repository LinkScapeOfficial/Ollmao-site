import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-background px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center">
          <Image
            className="mr-3 block dark:hidden"
            src="/ollmao.svg"
            alt="Ollmao"
            width={30}
            height={30}
          />
          <Image
            className="mr-3 hidden dark:block"
            src="/ollmao_dark.svg"
            alt="Ollmao"
            width={30}
            height={30}
          />
          <Link href="/" className="text-2xl font-bold text-foreground">
            Ollmao
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#features"
                className="text-foreground hover:text-black"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#download"
                className="text-foreground hover:text-black"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/LinkScape/ollmao"
                className="text-foreground hover:text-black"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
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
