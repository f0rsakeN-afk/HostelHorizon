import supabase from './supabase';
export async function getStudentsApi() {
  let { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error(error);
    throw new Error('Students data could not be loaded');
  }
  return data;
}

export async function addStudentsApi() {
  const { data, error } = await supabase
    .from('students')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('students cannot be added');
  }
  return data;
}
