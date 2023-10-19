import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 샘플 리다이렉트
  if (request.nextUrl.pathname.startsWith('/redirect')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// 미들웨어 적용 Path
export const config = {
  matcher: ['/redirect/:path*'],
};
