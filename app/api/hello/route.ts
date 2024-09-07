import type { NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  let responseText = 'Hello World'
  return new Response(responseText)
}
