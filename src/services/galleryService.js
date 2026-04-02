import { supabase } from "../lib/supabaseClient";

export async function getGalleryImages() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function deleteImage(id) {
  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateImage(id, updatedData) {
  const { error } = await supabase
    .from("gallery")
    .update(updatedData)
    .eq("id", id);

  if (error) throw error;
}