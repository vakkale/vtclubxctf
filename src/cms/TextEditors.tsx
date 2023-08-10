import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { TiptapContent } from "./StandardContent";
import StarterKit from "@tiptap/starter-kit";

export const EditableSingleLineTextElement: React.FC<{
    text: string;
    pushUpdate: (updatedText: string) => void;
    editable?: boolean;
    className?: string;
    type?: string;
    style?: React.CSSProperties;
  }> = (props) => {
    const [state, setState] = React.useState<string>(props.text);
  
    function handleContentChange(updatedText: string) {
      setState(updatedText);
      props.pushUpdate(updatedText);
    }
  
    return (
      <>
        {props.editable ? (
          <input
            className={`${props.className} editable-text-single`}
            type="text"
            value={state}
            onChange={(e) => handleContentChange(e.target.value)}
            style={props.style}
          />
        ) : props.type === "p" ? (
          <p className={props.className} style={props.style}>
            {state}
          </p>
        ) : (
          <div className={props.className} style={props.style}>
            {state}
          </div>
        )}
      </>
    );
  };
  
  export const EditableMultiLineTextElement: React.FC<{
    text: string;
    pushUpdate: (updatedText: string) => void;
    editable?: boolean;
    className?: string;
  }> = (props) => {
    const [state, setState] = React.useState<string>(props.text);
  
    // Initialize editor content
    const [editorContent, setEditorContent] = useState<TiptapContent>(() => {
      return {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: state }],
          },
        ],
      };
    });
  
    // Initialize tiptap editor
    const editor = useEditor({
      content: editorContent,
      extensions: [StarterKit],
      onUpdate: ({ editor }) => {
        handleContentChange(editor.getJSON() as TiptapContent);
      },
    });
  
    console.log("editor content: ", editorContent);
  
    function handleContentChange(newContent: TiptapContent) {
      // @ts-ignore
      const updatedText = newContent.content[0]?.content[0]?.text || "";
      setState(updatedText);
      props.pushUpdate(updatedText);
    }
  
    return (
      <>
        {props.editable ? (
          <EditorContent editor={editor} />
        ) : (
          <div className={props.className}>{state}</div>
        )}
      </>
    );
  };