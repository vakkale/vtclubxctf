import React from "react";
import "./PageHeader.scss";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  yPos?: string;
};

const PageHeader: React.FC<Props> = ({ image, title, subtitle, yPos }) => {
  return (
    <div
      className="page-header"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: yPos ? yPos : "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header-content">
        {subtitle ? (
          <div className="page-subtitle">{subtitle}</div>
        ) : (
          <div style={{ opacity: 0 }} className="page-subtitle">
            placeholder
          </div>
        )}
        <div className="page-title">{title}</div>
      </div>
    </div>
  );
};

export default PageHeader;