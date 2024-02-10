import supabase, { supabaseUrl } from './supabase';

export async function getRooms() {
  let { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function createEditRoom(newRoom, id) {
  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    '/',
    '',
  );

  const imagePath = hasImagePath
    ? newRoom.image
    : `${supabaseUrl}/storage/v1/object/public/room`;

  let query = supabase.from('rooms');

  if (!id) query = query.insert([{ ...newRoom, image: imagePath }]).select();
  if (id)
    query = query
      .update({ ...newRoom, image: imagePath })
      .eq('id', id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Rooms could not be created');
  }

  //2. upload image
  const { error: storageError } = await supabase.storage
    .from('roomImages')
    .upload(imageName, newRoom.image);

  //3.delete the cabin if there was an error uploading storage error
  if (storageError) {
    await supabase.from('rooms').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Room image could not be uploaded and the room was not created',
    );
  }
}

export async function deleteRoom(id) {
  const { error } = await supabase.from('rooms').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw Error('Room could not be deleted');
  }
}
