import React, { FC, useEffect, useState } from "react";
import { RenderImagePrompt } from "../cms/ImagePrompt";
import "../assets/editor_icons/remixicon.css";
import "./image.scss";

/* 
    Image component for rendering images in the CMS
    Customizable with a prompt, alt text, and caption
    Moveable and resizable
*/

export type ImageProps = {
  src: string;
  alt?: string;
  caption?: string;
  yPos?: string;
  xPos?: string;
};

interface Props {
  image: ImageProps;
  type: "background" | "inline";
  editable?: boolean;
  pushUpdate: (updatedImage: ImageProps) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Image: FC<Props> = (props) => {
  const [state, setState] = React.useState<ImageProps>(props.image);
  const [dragging, setDragging] = React.useState(false);
  const [dragStartY, setDragStartY] = React.useState(0);
  const [dragStartX, setDragStartX] = React.useState(0);
  const [hasMouseMoved, setHasMouseMoved] = React.useState<boolean>(false);
  const [showImagePrompt, setShowImagePrompt] = useState<boolean>(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.editable) {
      setDragging(true);
      setDragStartY(event.clientY);
      setDragStartX(event.clientX);
      setHasMouseMoved(false);
    }
  };

  const handleMouseUp = () => {
    if (props.editable) {
      setDragging(false);
      if (!hasMouseMoved) {
        // Show image prompt only if no mouse movement
        handleImageChange();
      } else {
        props.pushUpdate({ ...state, yPos: state.yPos, xPos: state.xPos });
      }
      setHasMouseMoved(false); // Reset hasMouseMoved
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.editable) {
      if (dragging) {
        const deltaY = dragStartY - event.clientY;
        const deltaX = dragStartX - event.clientX;
        // Calculate new yPos value based on deltaY and update the state
        // Update the yPos value in your state or prop here
        var newYPos = deltaY + parseInt(state.yPos ? state.yPos : "center");
        var newXPos = deltaX + parseInt(state.xPos ? state.xPos : "center");
        if (newYPos > 100) {
          newYPos = 100;
        } else if (newYPos < 0) {
          newYPos = 0;
        }
        if (newXPos > 100) {
          newXPos = 100;
        } else if (newXPos < 0) {
          newXPos = 0;
        }
        setState({
          ...state,
          yPos: newYPos.toString() + "%",
          xPos: newXPos.toString() + "%",
        });
        setDragStartY(event.clientY);
        setDragStartX(event.clientX);
        setHasMouseMoved(true); // Indicate that there was mouse movement
      }
    }
  };

  const handleImageChange = () => {
    if (props.editable) {
      setShowImagePrompt(true);
    }
  };

  useEffect(() => {
    if (!props.editable) {
      props.pushUpdate(state);
    }
  }, [props.editable]);

  return (
    <>
      {showImagePrompt && (
        <RenderImagePrompt
          setUrl={(url: string) => {
            setState({ ...state, src: url });
            props.pushUpdate({ ...state, src: url });
          }}
          onClose={() => {
            setShowImagePrompt(false);
          }}
        />
      )}
      {props.type === "background" ? (
        <div
          className={`editable-background-image ${props.className} ${
            props.editable ? "editable" : ""
          }`}
          style={{
            ...props.style,
            // TODO: show placeholder image if no src
            backgroundImage: `url(${state.src})`,
            backgroundPosition: `${state.xPos ? state.xPos : "50%"} ${
              state.yPos ? state.yPos : "50%"
            }`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {props.children}
        </div>
      ) : (
        <>
          <img
            className={`editable-inline-image ${props.className} ${
              props.editable ? "editable" : ""
            }`}
            src={props.image?.src}
            alt={props.image?.alt}
            style={{
              top: props.image?.yPos,
              left: props.image?.xPos,
            }}
          />
        </>
      )}
    </>
  );
};
