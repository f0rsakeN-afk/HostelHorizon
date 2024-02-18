import supabase from './supabase';
export async function getStudentsApi() {
  let { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error(error);
    throw new Error('Students data could not be loaded');
  }
  return data;
}
