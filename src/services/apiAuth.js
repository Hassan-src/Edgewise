import supabase from "./supabase";

export async function signup({ userName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function updateCurrentUser({ password, userName, avatar }) {
  let updateData = {};

  if (password) updateData.password = password;

  if (userName) {
    updateData.data = { userName };
  }

  // Get current user and previous avatar path
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  const oldAvatarPath = user.user_metadata.avatarPath;

  // Update password / username
  if (Object.keys(updateData).length > 0) {
    const { error } = await supabase.auth.updateUser(updateData);

    if (error) throw new Error(error.message);
  }

  if (!avatar) return user;

  // Upload new avatar
  const fileName = `avatar-${user.id}-${crypto.randomUUID()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(fileName);

  // Update user metadata
  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: publicUrl,
        avatarPath: fileName,
      },
    });

  if (updateError) {
    // Clean up the newly uploaded avatar
    await supabase.storage.from("avatars").remove([fileName]);

    throw new Error(updateError.message);
  }

  // Delete previous avatar
  if (oldAvatarPath) {
    const { error: deleteError } = await supabase.storage
      .from("avatars")
      .remove([oldAvatarPath]);

    if (deleteError) {
      console.error("Previous avatar deletion failed:", deleteError);
    }
  }

  return updatedUser;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
