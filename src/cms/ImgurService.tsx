import React from "react";

interface UploadImageProps {
  file: File;
  onSuccess(responseData: any): void;
  onError(error: Error): void;
}

export const UploadImage: React.FC<UploadImageProps> = ({
  file,
  onSuccess,
  onError,
}) => {
  const clientId = "3745ab94e73ad48";
  const albumId = "ZzNicui";

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgur.com/3/album/${albumId}/add`,
        {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      if (error instanceof Error) {
        onError(error);
      }
    }
  };

  React.useEffect(() => {
    uploadImage();
    //eslint-disable-next-line
  }, []);

  return null;
};

export const fetchImageUrl = async (imageHash: string) => {
  const clientId = "3745ab94e73ad48";

  try {
    const response = await fetch(`https://api.imgur.com/3/image/${imageHash}`, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
    });

    const data = await response.json();
    return data.data.link;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    return null;
  }
};

export const uploadImageAndFetchUrl = async (
    file: File,
    onSuccess: (url: string) => void,
    onError: (error: Error) => void
  ) => {
    const clientId = "3745ab94e73ad48";
    /* const albumId = "ZzNicui"; */
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const response = await fetch(
        `https://api.imgur.com/3/image`,
        {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
          body: formData,
        }
      );
  
      const data = await response.json();
      if (data.success) {
        const imageHash = data.data.id;
        const imageUrl = await fetchImageUrl(imageHash);
        if (imageUrl) {
          onSuccess(imageUrl);
        } else {
          onError(new Error("Failed to fetch image URL."));
        }
      } else {
        onError(new Error("Image upload failed."));
      }
    } catch (error) {
      if (error instanceof Error) {
        onError(error);
      }
    }
  };