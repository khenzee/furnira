import { NextResponse } from 'next/server';
import { blogData } from '@/data/blogData';

export async function GET(request, { params }) {
  const { id } = await params;
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}
