import supabase from './supabase';

export async function getRooms() {
  let { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function deleteRoom(id) {
  const { error } = await supabase
    .from('rooms')
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw Error('Room could not be deleted');
  }
}
