import { NextResponse } from 'next/server';
import { productData } from '@/data/productData';

export async function GET() {
  return NextResponse.json(productData);
}
