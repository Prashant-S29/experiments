import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to handle redirects
export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Check if the pathname matches /experiments/dribbble-like-navigation
  if (url.pathname === '/experiments/dribbble-like-navigation') {
    // Redirect to /experiments/dribbble-like-navigation/following
    url.pathname = '/experiments/dribbble-like-navigation/following';
    return NextResponse.redirect(url);
  }

  // Continue to the requested route if no match
  return NextResponse.next();
}

// Define the paths that this middleware should apply to
export const config = {
  matcher: '/experiments/dribbble-like-navigation/:path*',
};
