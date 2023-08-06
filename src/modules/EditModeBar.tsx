import React from "react";
import "../header/banner.scss";
import { RenderCreatePagePrompt } from "../cms/CreatePagePrompt";
import { PageProps } from "../page/Page";

interface EditModeBarProps {
  inEditMode: boolean;
  toggleEditing: () => void;
  pushNewPage: (page: PageProps) => void;
}

const EditModeBar: React.FC<EditModeBarProps> = ({
  toggleEditing,
  inEditMode,
  pushNewPage,
}) => {
  const [showCreatePagePrompt, setShowCreatePagePrompt] =
    React.useState<boolean>(false);

  const handleCreatePage = () => {
    setShowCreatePagePrompt(true);
  };

  return (
    <>
      {showCreatePagePrompt && (
        <RenderCreatePagePrompt
          onCreatePage={(page: PageProps) => {
            pushNewPage(page);
          }}
          onClose={() => {
            setShowCreatePagePrompt(false);
          }}
        />
      )}
      <div
        className="banner edit-banner"
        style={{
          marginTop: "60px",
          transform: "none",
          animation: "none",
        }}
      >
        <button className="banner-button" onClick={toggleEditing}>
          <span>{inEditMode ? "Save Changes" : "Edit Page"}</span>
          <span>
            <i className="ri-draft-line"></i>
          </span>
        </button>
        <button className="banner-button" onClick={handleCreatePage}>
          <span>Create New Page</span>
          <span>
            <i className="ri-layout-3-line"></i>
          </span>
        </button>
      </div>
    </>
  );
};

export default EditModeBar;
