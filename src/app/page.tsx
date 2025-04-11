import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ul className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            This is a public route
            <Button variant={'link'}>
              <code>
                To <Link href={'/dashboard'}>/dashboard</Link>
              </code>
            </Button>
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href='/auth/sign-in'
          >
            <Button>
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Sign In
            </Button>
          </Link>
          <Link
            href="/auth/sign-up"
          >
            <Button variant={"outline"}>
              Sign Up
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
