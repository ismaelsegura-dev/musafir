import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    
    // Decode base64 credentials
    // atob is available in the Edge Runtime
    const decodedValue = atob(authValue);
    const [user, pwd] = decodedValue.split(':');

    if (user === 'malikadmin' && pwd === 'Kl083.P') {
      return NextResponse.next();
    }
  }

  // Request basic auth
  return new NextResponse('Valid authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Applies to all routes except basic static files to avoid breaking assets loading once authenticated
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
