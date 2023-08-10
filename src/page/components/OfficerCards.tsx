import React, { useEffect, useState } from "react";
import "../../contact/Contact.scss";
// @ts-ignore
import db from "../../data/database";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";
import { Image, ImageProps } from "../../modules/Image";
import {
  EditableSingleLineTextElement,
  EditableMultiLineTextElement,
} from "../../cms/TextEditors";

type Officer = {
  image: ImageProps;
  name: string;
  position: string;
  email: string;
  bio: string;
  order: number;
  id: string;
  /* 
    These aren't actually part of the officer object, but they are added to the officer object in the OfficerCard component and they have to be declared here so that we can remove them before saving the officer to the database    
  */
  pushUpdate?: (updatedOfficer: Officer) => void;
  updateOfficerState?: (updatedOfficer: Officer) => void;
  editable?: boolean;
};

interface Props {
  officers?: Officer[];
  editing?: boolean;
}

const OfficerCardContent: React.FC<Props> = (props) => {
  const [officers, setOfficers] = useState<Officer[]>([]);
  const editingRef = React.useRef<boolean>(false);
  const officersRef = React.useRef<Officer[]>([]);

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
            order: officerData.order,
            id: doc.id,
          };
          return officer;
        }
      );
      setOfficers(officer_data);
      officersRef.current = officer_data;
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
    if (editingRef.current && !props.editing) {
      const officersToSave = officers.map((officer) => {
        const officerToSave = { ...officer };
        delete officerToSave.pushUpdate;
        delete officerToSave.updateOfficerState;
        delete officerToSave.editable;
        return officerToSave;
      });

      UpdateOfficers(officersToSave, () => {
        officersRef.current = officersToSave;
      });
    }
    if (props.editing === true || props.editing === false) {
      editingRef.current = props.editing;
    }
  }, [props.editing, officers]);

  function UpdateOfficers(officers: Officer[], callback: () => void) {
    officers.forEach((officer, index) => {
      const officerRef = doc(db, "officers", officer.id);
      console.log("Updating officer: ", officer);
      setDoc(officerRef, officer).then(() => {
        if (index === officers.length - 1) {
          callback(); // Call the callback when all updates are complete
        }
      });
    });
  }

  function updateOfficerState(updatedOfficer: Officer) {
    const updatedOfficers = officers.map((officer) => {
      if (officer.id === updatedOfficer.id) {
        return updatedOfficer;
      } else {
        return { updateOfficerState, ...officer };
      }
    });

    console.log("updated officersss: ", updatedOfficers);
    setOfficers(updatedOfficers);
    console.log("officers: ", officers);
  }

  const AddOfficerCard = () => {
    return (
      <div
        className="add-officer-card"
        onClick={() => {
          setOfficers([
            ...officers,
            {
              image: {
                src: "",
                xPos: "50%",
                yPos: "50%",
              },
              name: "New Officer",
              position: "Position",
              email: "example@vt.edu",
              bio: "Bio goes here...",
              order: officers.length + 1,
              id: (Math.random() * 1000000).toString().split(".")[0],
            },
          ]);
        }}
        style={{
          order: officers.length + 1,
        }}
      >
        + Add Officer
      </div>
    );
  };

  const RearrangeOfficerCards = () => {
    return <div className="rearrange-officer-cards">Rearrange Cards</div>;
  };

  return (
    <div className="officer-cards-container">
      {officers &&
        officers.map((officer: any) => (
          <OfficerCard
            key={officer.id}
            image={officer.image}
            name={officer.name}
            position={officer.position}
            email={officer.email}
            bio={officer.bio}
            order={officer.order}
            id={officer.id}
            editable={props.editing}
            pushUpdate={updateOfficerState}
          />
        ))}
      {props.editing && <AddOfficerCard />}{" "}
      {/* <div
        className="officer-cards-edit-options officer-card"
        style={{
          order: officers.length + 1,
        }}
      >
        <AddOfficerCard />
        <RearrangeOfficerCards />
      </div> */}
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

  function updateOfficer(updatedOfficer: Partial<Officer>) {
    const updatedOfficerState = { ...state, ...updatedOfficer };
    setState(updatedOfficerState);
  }

  React.useEffect(() => {
    props.pushUpdate(state);
  }, [state]);

  return (
    <div
      className="officer-card"
      style={{
        order: props.order,
      }}
    >
      <div className="card-top">
        <Image
          key={props.id}
          type="background"
          image={props.image}
          editable={props.editable}
          pushUpdate={(updatedImage) => {
            updateOfficer({ image: updatedImage });
          }}
          style={{ height: "400px" }}
        />
        <div className="officer-name-pos">
          <EditableSingleLineTextElement
            className="officer-name"
            key={`${props.id}name`}
            text={props.name}
            editable={props.editable}
            pushUpdate={(updatedText) => {
              updateOfficer({ name: updatedText });
            }}
          />
          <EditableSingleLineTextElement
            className="officer-position"
            key={`${props.id}position`}
            text={props.position}
            editable={props.editable}
            pushUpdate={(updatedText) => {
              updateOfficer({ position: updatedText });
            }}
          />
        </div>
      </div>

      <div className="card-bottom">
        <EditableMultiLineTextElement
          className="officer-bio"
          key={`${props.id}bio`}
          text={props.bio}
          editable={props.editable}
          pushUpdate={(updatedText) => {
            updateOfficer({ bio: updatedText });
          }}
        />
      </div>
      <div className="officer-email">
        <a
          href={`mailto:${props.email}`}
          {
            // dont mailto if editing
            ...(props.editable && {
              onClick: (e) => {
                e.preventDefault();
              },
            })
          }
        >
          <EditableSingleLineTextElement
            className=""
            key={`${props.id}email`}
            style={{
              color: "white",
              textDecoration: "underline",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              width: "100%",
            }}
            text={props.email}
            editable={props.editable}
            pushUpdate={(updatedText) => {
              updateOfficer({ email: updatedText });
            }}
          />
        </a>
      </div>
    </div>
  );
};

function UpdateOfficers(officers: Officer[], callback: () => void) {
  officers.forEach((officer, index) => {
    const officerRef = doc(db, "officers", officer.id);
    console.log("Updating officer: ", officer);
    setDoc(officerRef, officer).then(() => {
      if (index === officers.length - 1) {
        callback(); // Call the callback when all updates are complete
      }
    });
  });
}
