import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // Your middleware logic
  console.log('Middleware is running');
  return NextResponse.next(); // Continue the request
}

export const config = {
  matcher: '/api/*', // Optional: Apply to specific routes
};

