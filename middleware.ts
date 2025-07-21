// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { sessionStatus } from '@/utils/session';

const protectedRoutes = ['/middlewareSide'];

export function middleware(req: NextRequest) {
    console.log('✅ Middleware triggered');

    const isProtected = protectedRoutes.includes(req.nextUrl.pathname);

    const isLoggedIn = sessionStatus;

    if (isProtected && !isLoggedIn) {
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
