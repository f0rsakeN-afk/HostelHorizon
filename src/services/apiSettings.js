import supabase from './supabase';

export async function GetSettingsApi() {
  let { data, error } = await supabase.from('settings').select('*').single();
  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  return data;
}

export async function UpdateSettingsApi() {
  const { data, error } = await supabase
    .from('settings')
    .update({ other_column: 'otherValue' })
    .eq('id', 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Room settings could not be updated');
  }
}
