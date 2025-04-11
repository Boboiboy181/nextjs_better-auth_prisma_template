"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className="!font-[family-name:var(--font-geist-sans)] flex items-start justify-items-center min-h-screen flex-col gap-4">
      <Button
        variant={"link"}
        onClick={() => {
          router.back();
        }}
      >
        Back
      </Button>
      {children}
    </div>
  );
}
