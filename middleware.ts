import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // We need to create a respmdonse and hand it to the supabase client to be able to modify the response headers.

  const res = NextResponse.next();

  const redirectUrl = req.nextUrl.clone();

  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    redirectUrl.pathname = '/auth/signin';
    return NextResponse.redirect(redirectUrl);
  }

  if (session && session?.user.user_metadata.role === 'user' && req.nextUrl.pathname.startsWith('/user')) {
    return res;
  }

  if (session && session?.user.user_metadata.role === 'lister' && req.nextUrl.pathname.startsWith('/lister')) {
    return res;
  }

  if (session && req.nextUrl.pathname.startsWith('/moderator')) {
    return res;
  }

  // Auth condition not met, redirect to home page.
  redirectUrl.pathname = '/auth/signin';
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/user/:path*', '/lister/:path*', '/moderator/']
};
