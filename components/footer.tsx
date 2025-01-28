import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 text-center">
      <section className="grid grid-cols-2 gap-6 sm:grid-cols-12 sm:gap-0">
        <div
          className={
            "order-last col-span-2 flex flex-col items-start sm:order-first sm:col-span-8"
          }
        >
          <Image
            src={"https://cdn.linkscape.app/logo.svg"}
            alt={"LinkScape logo"}
            width={648}
            height={2194}
            className={"block w-32 dark:hidden sm:w-56"}
          />
          <Image
            src={"https://cdn.linkscape.app/logo_dark.svg"}
            alt={"LinkScape logo"}
            width={648}
            height={2194}
            className={"hidden w-32 dark:block sm:w-56"}
          />
          <div className="mt-2 text-left text-sm text-muted-foreground sm:mt-6 sm:text-base">
            <div>© 2025 LinkScape. All rights reserved.</div>
            <div className="flex flex-row items-center justify-start">
              Powered by
              <Link
                href={
                  "https://vercel.com/?utm_source=linkscape&utm_campaign=oss"
                }
              >
                <Image
                  src={"https://cdn.linkscape.app/vercel-logotype-dark.svg"}
                  alt={"Vercel Logo"}
                  width={158}
                  height={48}
                  className={"ml-1 block inline-block w-12 dark:hidden sm:w-16"}
                />
                <Image
                  src={"https://cdn.linkscape.app/vercel-logotype-light.svg"}
                  alt={"Vercel Logo"}
                  width={158}
                  height={48}
                  className={"ml-1 inline-block hidden w-12 dark:block sm:w-16"}
                />
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
