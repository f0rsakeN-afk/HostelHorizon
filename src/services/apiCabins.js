import supabase, { supabaseUrl } from './supabase';

export async function getRooms() {
  let { data: rooms, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}
