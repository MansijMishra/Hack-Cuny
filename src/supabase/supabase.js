import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://etsqkvewfnqsprjnmhmm.supabase.co/"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0c3FrdmV3Zm5xc3Byam5taG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyMDA2NDYsImV4cCI6MjAyMzc3NjY0Nn0.DcqzDfu4NZ2N9nVLeC1CyZQXgiRhZJFYNUJtwPO7o3g"
export const supabase = createClient(supabaseUrl, supabaseKey)