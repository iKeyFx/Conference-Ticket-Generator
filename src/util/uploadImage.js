export const uploadImageToCloudinary = async (
  file,
  setImagePreview,
  setIsUploading,
  setValue
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ticket_test");
  formData.append("cloud_name", "dt6iwixwl");
  try {
    setIsUploading(true);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dt6iwixwl/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.secure_url) {
      setImagePreview(data.secure_url);
      setValue("imageUrl", data.secure_url);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  } finally {
    setIsUploading(false);
  }
};
