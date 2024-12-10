import { createClient } from 'https://esm.sh/@supabase/supabase-js';

  // Initialize the Supabase client
const supabaseUrl = 'https://oijidfrrtisjnwqjicbv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pamlkZnJydGlzam53cWppY2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0OTU3NDEsImV4cCI6MjA0OTA3MTc0MX0.h4CQrrrHGH_upP1eesNcj5JNI8W3dNX1K-ZmHADCo1U';
export const supabase = createClient(supabaseUrl, supabaseKey);