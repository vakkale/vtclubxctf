import "../modules/Article.scss";
// @ts-ignore
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
// @ts-ignore
import TextStyle from "@tiptap/extension-text-style";
import HardBreak from "@tiptap/extension-hard-break";
import DropCursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PageProps } from "../page/Page";
import MenuBar from "./MenuBar";
// @ts-ignore
/* import { CustomLink } from "./CustomLink"; */
import React, { FC, useEffect, useState, useRef } from "react";

export interface TiptapContent {
  type: string;
  content: TiptapNode[];
}

export interface TiptapNode {
  type: string;
  text?: string;
  attrs?: any; // Add more specific types as needed for attributes
  marks?: TiptapMark[];
  content?: TiptapNode[];
}

export interface TiptapMark {
  type: string;
  attrs?: any; // Add more specific types as needed for mark attributes
}

export interface ArticleProps {
  image?: string;
  alt?: string;
  content: TiptapContent | string;
  editable?: boolean;
}

interface AdditionalProps {
  pushUpdate(updatedProps: Partial<PageProps>): void;
}

/* const ImportantBlock = BlockQuote.extend({
  renderHTML({ HTMLAttributes }) {
    return ["blockquote", HTMLAttributes, ["strong", 0]];
 */

const StandardContent: FC<ArticleProps & AdditionalProps> = (props) => {
  // state for if content is loaded
  const [doneLoading, setDoneLoading] = useState(true);
  // state for if content is editable
  /* const [editable, setEditable] = useState(false); // change this when auth is implemented */

  // refence to the current page content
  const currentArticle = useRef<JSX.Element>(<></>);
  // reference to the current page image
  const currentImage = useRef<string>("");

  // Detect changes in inEditMode and update the page state accordingly
  /* useEffect(() => {
    if (!props.editable) {
      // the current editor content
      const currentContent = editor?.getJSON() as TiptapContent;
      // If inEditMode is true, update the page state with current props
      if (currentContent) {
        props.pushUpdate({ content: currentContent });
      }
    }
  }, [props.editable]); */

  useEffect(() => {
    currentArticle.current = (
      <EditorContent editor={editor} className="article-content" />
    );
    currentImage.current = props.image ? props.image : "";
  }, []);

  useEffect(() => {
    // the current editor content
    const currentContent = editor?.getJSON() as TiptapContent;
    // If inEditMode is true, update the page state with current props
    if (currentContent) {
      props.pushUpdate({ content: currentContent });
    }
  }, [props.editable]);

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      DropCursor,
      HardBreak,
      Link,
      /* CustomLink, */
      Image.configure({
        HTMLAttributes: {
          alt: props.alt ? props.alt : "",
        },
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: props.content,
  });

  return (
    <div className="article-container">
      <div className={`loading-overlay ${!doneLoading ? "loading" : "loaded"}`}>
        {!doneLoading && (
          <div className="loading-spinner">{/* Spinner goes here */}</div>
        )}
      </div>
      {props.image && (
        <div className="image-container">
          <img
            src={currentImage.current}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt={props.alt ? props.alt : ""}
          ></img>
        </div>
      )}
      {props.editable ? (
        <div className="editor-container">
          <div className="menu-wrapper">
            <MenuBar editor={editor} />
          </div>
          <div className="content-wrapper">
            <EditorContent editor={editor} />
          </div>
        </div>
      ) : (
        <div className="html-container">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: editor?.getHTML() as string }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StandardContent;
