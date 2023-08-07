import { getPostByIdAndRecommendations } from '@/app/lib/post'
import { NextResponse } from 'next/server'
 
export async function GET(request, { params }) {
  const data = await getPostByIdAndRecommendations(params.entryId, 4)
  return NextResponse.json(data)
}