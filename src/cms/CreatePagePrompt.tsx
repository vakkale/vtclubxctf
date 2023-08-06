import "./CreatePagePrompt.scss";
import React from "react";
import { PageProps } from "../page/Page";
import ReactDOM from "react-dom";
import { validateData } from "../page/UpdatePageData";

interface Props {
  onClose?: () => void;
  onCreatePage: (page: PageProps) => void;
}

const CreatePagePrompt: React.FC<Props> = ({ onClose, onCreatePage }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleVisibilityChange = () => {
    setIsVisible(!isVisible);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (!isVisible) {
        onClose && onClose();
      }
    }, 200);
  }, [isVisible]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Get the form element
    const formData = new FormData(form);
    const page: PageProps = {
      title: formData.get("title") as string,
      subtitle: formData.get("subtitle") as string,
      url: formData.get("url") as string,
      background: (formData.get("background") as string)
        ? (formData.get("background") as string)
        : "https://i.imgur.com/BMMNQV3.jpg",
      content: " ",
      yPos: "0%",
      featuredImage: formData.get("featuredImage") as string,
      customSidebarFeature: {
        title: formData.get("customSidebarFeatureTitle") as string,
        subtitle: formData.get("customSidebarFeatureSubtitle") as string,
      },
      // ... other properties
    };
    try {
      validateData(page);
      onCreatePage(page);
      handleVisibilityChange();
    } catch (error) {
      if (error === "Title is required.") {
        alert("Title is required.");
      } else if (error === "URL is required.") {
        alert("URL is required.");
      } else if (error === "Background is required.") {
        alert("Background is required.");
      } else if (error === "Content is required.") {
        alert("Content is required.");
      } else if (
        error === "SideBarText, customSidebarFeature, or subPages is required."
      ) {
        alert("SideBarText is required.");
      } else {
        alert(error);
      }
    }
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
        <form className="create-page-form" onSubmit={handleSubmit}>
          <div className="form-header">Create a new page</div>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </div>
          <div className="form-input">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" name="subtitle" id="subtitle" />
          </div>
          <div className="form-input">
            <label htmlFor="url">URL</label>
            <input type="text" name="url" id="url" required />
          </div>
          <div className="form-input">
            <label htmlFor="background">Background</label>
            <input type="text" name="background" id="background" />
          </div>
          <div className="form-input">
            <label htmlFor="featuredImage">Featured Image</label>
            <input type="text" name="featuredImage" id="featuredImage" />
          </div>
          <div className="form-input">
            <label htmlFor="customSidebarFeatureTitle">Sidebar Title</label>
            <input
              type="text"
              name="customSidebarFeatureTitle"
              id="customSidebarFeatureTitle"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="customSidebarFeatureSubtitle">
              Sidebar Subtitle
            </label>
            <input
              type="text"
              name="customSidebarFeatureSubtitle"
              id="customSidebarFeatureSubtitle"
            />
          </div>
          {/* <div className="form-input">
            <label htmlFor="meta">Meta</label>
            <input type="text" name="meta" id="meta" />
          </div> */}
          <div className="form-button">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                handleVisibilityChange();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePagePrompt;

export const RenderCreatePagePrompt: React.FC<Props> = ({
  onClose,
  onCreatePage,
}) => {
  return ReactDOM.createPortal(
    <CreatePagePrompt onClose={onClose} onCreatePage={onCreatePage} />,
    document.getElementById("modal-root") as HTMLElement
  );
};
