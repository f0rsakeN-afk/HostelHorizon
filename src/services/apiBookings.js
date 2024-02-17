import supabase from './supabase';
export async function getBookingsApi() {
  let { data, error } = await supabase.from('bookings').select('*');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not be loaded');
  }
    return data;
}
