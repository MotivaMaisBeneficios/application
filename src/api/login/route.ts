import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log({ data });

  // Aqui você validaria o login/senha e criaria o token real
  const token = JSON.stringify(data);

  (await cookies()).set({
    name: 'token',
    value: token,
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
    path: '/',
  });

  return NextResponse.json({ success: false });
}
