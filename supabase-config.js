const SUPABASE_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_T7FLuaPz21XX4Bu73BSWXg_zFfXPFYW";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
