import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://afjxfgpwdqxbmrurwtkh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanhmZ3B3ZHF4Ym1ydXJ3dGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODkyOTMsImV4cCI6MjAyMzA2NTI5M30.PTbrddWhVTLJ29UIIcdnXVobrvxspnx4o4N5sMO_kpQ';
const supabase = createClient(supabaseUrl, supabaseKey);
