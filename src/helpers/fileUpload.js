export const fileUpload = async (file) => {
  const urlCloudinary = "https://api.cloudinary.com/v1_1/divjxvhtz/upload";
  const formData = new FormData();
  formData.append("upload_preset", "CRUD-heroku");
  formData.append("file", file);
  const response = await fetch(urlCloudinary, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result.secure_url;
};
