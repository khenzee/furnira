import { NextResponse } from 'next/server';
import { productData } from '@/data/productData';

export async function GET(request, { params }) {
  const { id } = await params;
  const product = productData.find((p) => p.id.toString() === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
