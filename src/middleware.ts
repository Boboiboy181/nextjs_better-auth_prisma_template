import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session && pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL("/auth/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	runtime: "nodejs",
	matcher: [
        {
            source: '/((?!_next/static|_next/image|.*\\.png$).*)',
            missing: [{ type: 'header', key: 'next-action' }],
        },
    ],
};
