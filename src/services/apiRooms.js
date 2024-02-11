import supabase, { supabaseUrl } from './supabase';

export async function getRoomsApi() {
  let { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function createRoomApi(room) {
  const imageName = `${Math.random()}-${room.image.name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/roomImages/${imageName}`;
  const { data, error } = await supabase
    .from('rooms')
    .insert([{ ...room, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Room could not be created');
  }

  //https://afjxfgpwdqxbmrurwtkh.supabase.co/storage/v1/object/public/roomImages/signal-2023-12-29-205351.jpeg

  const { error: storageError } = await supabase.storage
    .from('roomImages')
    .upload(imageName, room.image);

  if (storageError) {
    const { error } = await supabase.from('rooms').delete().eq('id', data.id);
  }
}

export async function editRoomApi(newRoom, id) {
  const { data, error } = await supabase
    .from('rooms')
    .update([{...newRoom}])
    .eq('id', id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Room could not be edited');
  }
}

export async function deleteRoomApi(id) {
  const { error } = await supabase.from('rooms').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw Error('Room could not be deleted');
  }
}
