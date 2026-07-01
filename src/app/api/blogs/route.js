import { NextResponse } from 'next/server';
import { blogData } from '@/data/blogData';

export async function GET() {
  // Simulate network delay if you want
  // await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(blogData);
}
