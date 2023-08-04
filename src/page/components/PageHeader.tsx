import React from "react";
import "../../modules/PageHeader.scss";
import ImagePrompt from "../../cms/ImagePrompt";

interface Props {
  background: string;
  title: string;
  subtitle?: string;
  yPos?: string;
}

interface AdditionalProps {
  editable?: boolean;
  pushUpdate(updatedProps: Partial<Props>): void;
}

const PageHeader: React.FC<Props & AdditionalProps> = (props) => {
  const [headerState, setHeaderState] = React.useState<Props>(props);
  const [elementSelected, setElementSelected] = React.useState<string>("background");
  const [dragging, setDragging] = React.useState(false);
  const [dragStartY, setDragStartY] = React.useState(0);
  const [hasMouseMoved, setHasMouseMoved] = React.useState<boolean>(false);
  const [showImagePrompt, setShowImagePrompt] = React.useState<boolean>(false);

  function handleHover(focusedElement: string) {
    setElementSelected(focusedElement);
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.editable) {
      setDragging(true);
      setDragStartY(event.clientY);
      setHasMouseMoved(false);
    }
  };

  const handleMouseUp = () => {
    if (props.editable) {
      setDragging(false);
      if (!hasMouseMoved && elementSelected === "background") {
        handleImageChange(); // Show image prompt only if no mouse movement
      } else {
        props.pushUpdate({ yPos: headerState.yPos });
      }
      setHasMouseMoved(false); // Reset hasMouseMoved
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.editable) {
      if (dragging) {
        const deltaY = dragStartY - event.clientY;
        // Calculate new yPos value based on deltaY and update the state
        // Update the yPos value in your state or prop here
        var newYPos =
          deltaY + parseInt(headerState.yPos ? headerState.yPos : "center");
        if (newYPos > 100) {
          newYPos = 100;
        } else if (newYPos < 0) {
          newYPos = 0;
        }
        setHeaderState({ ...headerState, yPos: newYPos.toString() + "%" });
        setDragStartY(event.clientY);
        setHasMouseMoved(true); // Indicate that there was mouse movement
      }
    }
  };

  const handleImageChange = () => {
    if (props.editable) {
      setShowImagePrompt(true);
    }
  };

  const handleModalClose = () => {
    setShowImagePrompt(false);
  };

  React.useEffect(() => {
    console.log("setShowImagePrompt: " + showImagePrompt);
  }, [showImagePrompt]);

  const handleUrlChange = (url: string) => {
    setHeaderState({ ...headerState, background: url });
    props.pushUpdate({ background: url });
  };

  return (
    <>
      {showImagePrompt && <ImagePrompt setUrl={handleUrlChange} onClose={handleModalClose}/>}
      <div
        key={headerState.background}
        className={`page-header ${props.editable ? "editable" : ""}`}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerState.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: headerState.yPos ? headerState.yPos : "center",
          backgroundRepeat: "no-repeat",
          transitionDuration: "0.1s",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="header-content">
          {headerState.subtitle ? (
            <div
              className="page-subtitle"
              {...(props.editable &&
                !dragging && {
                  onMouseEnter: () => handleHover("subtitle"),
                  onMouseLeave: () => handleHover("background"),
                })}
              {...(props.editable &&
                !dragging &&
                elementSelected === "subtitle" && {
                  onClick: () => {
                    const newSubtitle = prompt(
                      "Enter a new subtitle",
                      headerState.subtitle
                    );
                    if (newSubtitle) {
                      setHeaderState({ ...headerState, subtitle: newSubtitle });
                      props.pushUpdate({ subtitle: newSubtitle });
                    }
                  },
                })}
              style={{
                pointerEvents:
                  hasMouseMoved || !props.editable ? "none" : "auto",
              }}
            >
              {headerState.subtitle}
            </div>
          ) : (
            <div style={{ opacity: 0 }} className="page-subtitle">
              placeholder
            </div>
          )}
          <div
            className="page-title"
            {...(props.editable &&
              !dragging && {
                onMouseEnter: () => handleHover("title"),
                onMouseLeave: () => handleHover("background"),
              })}
            {...(props.editable &&
              !dragging &&
              elementSelected === "title" && {
                onClick: () => {
                  const newTitle = prompt(
                    "Enter a new title",
                    headerState.title
                  );
                  if (newTitle) {
                    setHeaderState({ ...headerState, title: newTitle });
                    props.pushUpdate({ title: newTitle });
                  }
                },
              })}
            style={{
              pointerEvents: hasMouseMoved || !props.editable ? "none" : "auto",
            }}
          >
            {headerState.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
