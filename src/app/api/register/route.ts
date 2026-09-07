import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, displayName } = body;

  if (!email || !password || !displayName) {
    return NextResponse.json({ error: '...' }, { status: 400 });
  }

  const userEmail = await prisma.user.findUnique({ where: { email } });

  if (userEmail) return NextResponse.json({ error: '...' }, { status: 409 });

  const userPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: email,
      passwordHash: userPassword,
      displayName: displayName,
      role: 'reader',
    },
  });

  return NextResponse.json({ id: user.id, email: user.email });
}
