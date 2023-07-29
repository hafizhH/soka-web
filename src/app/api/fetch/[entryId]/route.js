import { getEntryById } from '@/app/lib/post'
import { NextResponse } from 'next/server'
 
export async function GET(request, { params }) {
  const data = await getEntryById(params.entryId)
  return NextResponse.json(data)
}