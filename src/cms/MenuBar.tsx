import React, { FC } from "react";
import "./MenuBar.scss";
import { RenderImagePrompt } from "./ImagePrompt";
import "../assets/editor_icons/remixicon.css";

interface MenuBarProps {
  editor: any; // Replace 'any' with the correct type for the editor
}

const MenuBar: FC<MenuBarProps> = ({ editor }) => {
  const [showImagePrompt, setShowImagePrompt] = React.useState<boolean>(false);
  if (!editor) {
    return null;
  }

  const handleLinking = () => {
    // If the link is already active, remove it
    if (editor.isActive("link")) {
      return () => {
        editor.chain().focus().unsetLink().run();
        editor.commands.focus();
      };
    }

    // Otherwise, prompt the user for a URL
    var url = window.prompt("URL");

    if (url?.charAt(0) === "/") {
      const linkNode = {
        type: "Link",
        attrs: {
          href: url,
        },
      };
      editor.chain().focus().insertContent(linkNode).run();
      editor.commands.focus();
    } else if (url?.charAt(0) === "#") {
      // Handle anchor link
    } else if (url?.substring(0, 4) === "http") {
      editor.chain().focus().setLink({ href: url }).run();
      editor.commands.focus();
    } else {
      url = "https://" + url;
      editor.chain().focus().setLink({ href: url }).run();
      editor.commands.focus();
    }
  };

  return (
    <div className="menu-bar">
      {showImagePrompt && (
        <RenderImagePrompt
          setUrl={(url: string) => {
            editor.chain().focus().setImage({ src: url }).run();
            editor.commands.focus();
          }}
          onClose={() => {
            setShowImagePrompt(false);
          }}
        />
      )}

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <i className="ri-bold"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <i className="ri-italic"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <i className="ri-strikethrough"></i>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button> */}
      <button
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
      >
        <i className="ri-format-clear"></i>
      </button>
      {/* <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <i className="ri-text"></i>
      </button>
      <select
        name="heading"
        id="heading"
        onChange={(e) =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: parseInt(e.target.value) })
            .run()
        }
      >
        <option value="1" className="ri-h-1">
          &#xEDE6;
        </option>
        <option value="2" className="ri-h-2">
          &#xEDE7;
        </option>
        <option value="3" className="ri-h-3">
          &#xEDE8;
        </option>
        <option value="4" className="ri-h-4">
          &#xEDE9;
        </option>
        <option value="5" className="ri-h-5">
          &#xEDEA;
        </option>
        <option value="6" className="ri-h-6">
          &#xEDEB;
        </option>
      </select>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <i className="ri-list-unordered"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <i className="ri-list-ordered-2"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <i className="ri-code-view"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <i className="ri-double-quotes-r"></i>
      </button>
      <button
        onClick={handleLinking}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        {editor.isActive("link") ? (
          <i className="ri-link-unlink"></i>
        ) : (
          <i className="ri-link"></i>
        )}
      </button>
      <button
        onClick={() => {
          setShowImagePrompt(true);
        }}
      >
        <i className="ri-image-add-line"></i>
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button>
    </div>
  );
};

export default MenuBar;
