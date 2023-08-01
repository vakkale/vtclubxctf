import React from "react";
import "../header/banner.scss";

interface EditModeBarProps {
  inEditMode: boolean;
  toggleEditing: () => void;
}

const EditModeBar: React.FC<EditModeBarProps> = ({
  toggleEditing,
  inEditMode,
}) => {
  return (
    <div
      className="banner"
      style={{
        marginTop: "60px",
        transform: "none",
        animation: "none",
      }}
    >
      <button className="banner-button" onClick={toggleEditing}>
        {inEditMode ? "Exit Edit Mode" : "Edit Page"}
      </button>
    </div>
  );
};

export default EditModeBar;
