import { getAllPosts } from '@/app/lib/post'
import { NextResponse } from 'next/server'
 
export async function GET(request) {
  const data = await getAllPosts()
  return NextResponse.json(data)
}