// origin : Stackoverflow
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Clone the request headers so that we don't modify the original headers object
    const requestHeaders = new Headers(request.headers);

    // Check if the hosting platform provides the client's IP address and store it in a variable
    const ip = request.ip || "";

    // Add the client's IP address to the request headers using the 'x-forwarded-for' field
    requestHeaders.set("x-forwarded-for", ip);

    // Return a new request object with the updated headers using NextResponse.next()
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}