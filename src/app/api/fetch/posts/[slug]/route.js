import { getPostBySlugAndRecommendations } from '@/app/lib/post'
import { NextResponse } from 'next/server'
 
export async function GET(request, { params }) {
  const data = await getPostBySlugAndRecommendations(params.slug, 4)
  return NextResponse.json(data)
}