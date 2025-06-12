import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type RSVPData = {
  name: string
  email: string
  organization: string
  role: string
  dietary_restrictions?: string
}

export async function submitRSVP(data: RSVPData) {
  const { error } = await supabase
    .from('eduweb_rsvps')
    .insert([data])

  if (error) {
    throw error
  }
}