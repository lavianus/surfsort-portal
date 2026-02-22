import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export function createSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON)
}

export function getPhotoUrl(storagePath: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/surfsort-portal/${storagePath}`
}
