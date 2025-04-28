"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <div className="max-w-5xl w-full flex justify-between items-center p-4 bg-white dark:bg-slate-900 border rounded-4xl shadow dark:border-slate-700 sticky top-4 z-10 mb-4 mx-auto">
            <p className="font-semibold">iPoral.one</p>
            <div className="flex items-center gap-2 justify-center text-sm/6 text-center sm:text-left">
                <div className="tracking-[-.01em] flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                        <span>{session?.user.name}</span>{" "}
                        <Avatar>
                            <AvatarImage
                                src={session?.user.image as string}
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div>
                    <Button
                        variant={"outline"}
                        type="submit"
                        className="w-full hover:bg-red-500 hover:text-white"
                        onClick={async () => {
                            await signOut({
                                fetchOptions: {
                                    onSuccess: () => {
                                        router.push("/auth/sign-in");
                                    },
                                },
                            });
                        }}
                    >
                        <LogOut className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
