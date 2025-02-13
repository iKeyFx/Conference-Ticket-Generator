export const uploadImageToCloudinary = async (
  file,
  setImagePreview,
  setIsUploading,
  setValue
) => {
  try {
    setIsUploading(true);

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary configuration is missing");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    setImagePreview(data.secure_url);
    setValue("imageUrl", data.secure_url);
  } catch (error) {
    console.error("Error uploading image:", error);
  } finally {
    setIsUploading(false);
  }
};
