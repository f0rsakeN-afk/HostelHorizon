export async function GetSettingsApi() {
  let { data: settings, error } = await supabase.from('settings').select('*');
  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  return settings;
}

export async function UpdateSettingsApi() {
  const { data, error } = await supabase
    .from('settings')
    .update({ other_column: 'otherValue' })
    .eq('some_column', 'someValue')
    .select();

  if (error) {
    console.error(error);
    throw new Error('Room settings could not be updated');
  }
}
