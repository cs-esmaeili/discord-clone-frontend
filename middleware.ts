import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const refreshToken = req.cookies.get('refreshToken')?.value;

    if (!refreshToken) {
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*'],
};
