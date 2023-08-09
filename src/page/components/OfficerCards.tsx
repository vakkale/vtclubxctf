import React, { useEffect, useState } from "react";
import "../../contact/Contact.scss";
// @ts-ignore
import db from "../../data/database";
import {
  doc,
  setDoc,
  collection,
  DocumentReference,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";

type Officer = {
  image: string;
  name: string;
  position: string;
  email: string;
  bio: string;
  yPos?: string;
  xPos?: string;
  pushUpdate?: (updatedOfficer: Officer) => void;
};

interface Props {
  officers?: Officer[];
  editing?: boolean;
}

const OfficerCardContent: React.FC<Props> = (props) => {
  const [officers, setOfficers] = useState<Officer[]>([]);

  // Get officers from database
  useEffect(() => {
    async function getOfficers() {
      const officer_list = collection(db, "officers");
      const officer_snapshot = await getDocs(officer_list);
      const officer_data: Officer[] = officer_snapshot.docs.map(
        (doc: QueryDocumentSnapshot) => {
          const officerData = doc.data();
          const officer: Officer = {
            image: officerData.image,
            name: officerData.name,
            position: officerData.position,
            email: officerData.email,
            bio: officerData.bio,
            yPos: officerData.yPos,
            xPos: officerData.xPos,
          };
          return officer;
        }
      );
      setOfficers(officer_data);
    }
    getOfficers();
  }, []);

  // Or use the officers passed in as a prop
  useEffect(() => {
    if (props.officers) {
      setOfficers(props.officers);
    }
  }, [props.officers]);

  // Update the officers in the database when the officers state changes
  useEffect(() => {
    if (!props.editing) {
      UpdateOfficers(officers);
    }
  }, [officers, props.editing]);

  function updateOfficerState(updatedOfficer: Officer) {
    const updatedOfficers = officers.map((officer) => {
      if (officer.name === updatedOfficer.name) {
        return updatedOfficer;
      } else {
        return { updateOfficerState, ...officer };
      }
    });
    setOfficers(updatedOfficers);
  }

  return (
    <div className="officer-cards-container">
      {officers &&
        officers.map((officer: any) => (
          <OfficerCard
            key={officer.name}
            image={officer.image}
            name={officer.name}
            position={officer.position}
            email={officer.email}
            bio={officer.bio}
            yPos={officer.yPos}
            xPos={officer.xPos}
            editable={props.editing}
            pushUpdate={updateOfficerState}
          />
        ))}
      {props.editing && (
        <div
          className="add-officer-card"
          onClick={() => {
            setOfficers([
              ...officers,
              {
                image: "https://i.imgur.com/ftjzYaB.jpg",
                name: "asdasd",
                position: "asdas",
                email: "sadsadsad",
                bio: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                yPos: "center",
                xPos: "center",
              },
            ]);
          }}
        >
          Add Officer
        </div>
      )}{" "}
    </div>
  );
};

export default OfficerCardContent;

export const OfficerCard: React.FC<
  Officer & { editable?: boolean } & {
    pushUpdate: (updatedOfficer: Officer) => void;
  }
> = (props) => {
  const [state, setState] = React.useState<Officer>(props);
  const [dragging, setDragging] = React.useState(false);
  const [dragStartY, setDragStartY] = React.useState(0);
  const [dragStartX, setDragStartX] = React.useState(0);
  const [hasMouseMoved, setHasMouseMoved] = React.useState<boolean>(false);

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
    /* if (props.editable) {
      setShowImagePrompt(true);
    } */
  };

  return (
    <div className="officer-card">
      <div
        className="card-top"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: `${state.xPos ? state.xPos : "center"} 
          ${state.yPos ? state.yPos : "center"}`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="officer-name-pos">
          <div className="officer-name">{props.name}</div>
          <div className="officer-position">{props.position}</div>
        </div>
      </div>
      <div className="card-bottom">
        <p className="officer-bio">{props.bio}</p>
      </div>
      <div className="officer-email">
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </div>
    </div>
  );
};

function UpdateOfficers(officers: Officer[]) {
  officers.forEach((officer) => {
    const officerRef = doc(db, "officers", officer.name);
    //remove anytrhing that is not a string
    for (const key in officer) {
      // @ts-ignore
      if (typeof officer[key] !== "string") {
        // @ts-ignore
        delete officer[key];
      }
    }
    setDoc(officerRef, officer);
  });
}
