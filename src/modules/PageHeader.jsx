import "./PageHeader.scss";

const PageHeader = ({ image, title, subtitle }) => {
    return (
        <div className="page-header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "top"
        }}>
            <div className="header-content">
                <div className="page-subtitle">{subtitle}</div>
                <div className="page-title">{title}</div>
            </div>
        </div >
    );
}
export default PageHeader;