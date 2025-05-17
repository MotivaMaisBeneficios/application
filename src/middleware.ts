import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas públicas que não precisam de autenticação
const publicPaths = ['/', '/esqueci-senha'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const STATIC_FILE = /\.(.*)$/;

  if (
    STATIC_FILE.test(pathname) ||
    pathname.startsWith('/_next/static') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/icons') || // ajuste para suas pastas
    pathname.startsWith('/images') // ajuste para suas pastas
  ) {
    return NextResponse.next();
  }

  // Se a rota está nas públicas, libera direto
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Verifica autenticação (exemplo: cookie chamado 'token')
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // Se não autenticado, redireciona para '/'
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Se autenticado, deixa passar
  return NextResponse.next();
}

// Define em quais rotas o middleware deve rodar (todas exceto static assets)
export const config = {
  matcher: [
    /*
      Aplica o middleware a todas as rotas,
      exceto rotas estáticas e arquivos na pasta public:
    */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|icons|public|images|assets).*)',
  ],
};
