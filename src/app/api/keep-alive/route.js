import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    // Super lightweight query - just checks if your gallery table exists and has data
    const { data, error } = await supabase
      .from('gallery')
      .select('id', { count: 'exact', head: true })
      .limit(1)
    
    if (error) throw error
    
    return NextResponse.json({ 
      success: true, 
      message: 'Supabase keep-alive ping successful',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Keep-alive error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Ping failed' 
    }, { status: 500 })
  }
}