import React from "react";
import "./ImagePrompt.scss";
import "../assets/editor_icons/remixicon.css";
import { uploadImageAndFetchUrl } from "./ImgurService";

interface Props {
  url?: string;
  alt?: string;
  file?: File;
  setUrl: (url: string) => void;
  setAlt?: (alt: string) => void;
  onClose: () => void;
}

const ImagePrompt: React.FC<Props> = ({
  url,
  alt,
  file,
  setUrl,
  setAlt,
  onClose,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string | undefined>(url);
  const [isVisible, setIsVisible] = React.useState(true);
  const [awaitingImage, setAwaitingImage] = React.useState(false);

  const handleSave = () => {
    if (imageUrl && imageUrl !== "") {
      setUrl(imageUrl);
      handleVisibilityChange();
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (!isVisible) {
        onClose && onClose();
      }
    }, 200);
  }, [isVisible]);

  React.useEffect(() => {
    console.log("awaitingImage: " + awaitingImage);
  }, [awaitingImage]);

  const handleVisibilityChange = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`modal ${isVisible ? "visible" : ""}`}
      onClick={() => {
        handleVisibilityChange();
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <ImageUploadArea
          file={file}
          onUrlChange={setImageUrl}
          handleUploadError={() => {
            console.log("Error uploading image");
          }}
          onAwaitingImage={setAwaitingImage}
          onImageLoad={() => {
            setAwaitingImage(false);
          }}
        />
        <div className="other-fields">
          <textarea
            placeholder="Enter image url..."
            /* value={imageUrl} */
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <textarea
            placeholder="Enter image alt text..."
            value={alt}
            {
              /* If setAlt is undefined, the textarea is not editable */
              ...(setAlt && {
                onChange: (event) => setAlt(event.target.value),
              })
            }
          />
          <button
            className={`save-button ${awaitingImage ? "loading" : ""}`}
            onClick={() => {
              if (!awaitingImage) {
                handleSave();
              }
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePrompt;

interface ImageUploadAreaProps {
  file?: File;
  onUrlChange: (url: string) => void;
  handleUploadError: (error: any) => void;
  onAwaitingImage: (awaitingImage: boolean) => void;
  onImageLoad: (awaitingImage: boolean) => void;
}

export const ImageUploadArea: React.FC<ImageUploadAreaProps> = ({
  file,
  onUrlChange,
  handleUploadError,
  onAwaitingImage,
  onImageLoad,
}) => {
  const [uploadedFile, setUploadedFile] = React.useState<File | undefined>(
    file
  );

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.includes("image")) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const inputFileRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    // Trigger file input click when the div is clicked
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const allowedImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/webp",
        "image/bmp",
        "image/tiff",
        "image/heic",
        "image/heif",
        "image/avif",
        "image/jpg",
      ];

      if (allowedImageTypes.includes(selectedFile.type)) {
        setUploadedFile(selectedFile);
        onAwaitingImage(true);
        await uploadImageAndFetchUrl(
          selectedFile,
          onUrlChange,
          handleUploadError
        );
        onImageLoad(false);
      } else {
        // Display an error message or take appropriate action
        console.log("Invalid image file type selected");
      }
    }
  };

  return (
    <div
      className="image-upload-area"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      <input
        ref={inputFileRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <i className="ri-image-add-line"></i>
    </div>
  );
};
