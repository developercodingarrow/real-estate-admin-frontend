"use client";
import React, { useEffect, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./eitor.module.css";

const ReactQuillElement = ({ inputValue, inputChnageHandler }) => {
  // Initialize image resize module
  const { ImageResize } = useMemo(() => {
    try {
      const ImageResize = require("quill-image-resize-module-react").default;
      Quill.register("modules/imageResize", ImageResize);
      return { ImageResize };
    } catch (error) {
      console.warn("Image resize module not available:", error.message);
      return { ImageResize: null };
    }
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: [1, 2, 3, false] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
      ...(ImageResize && {
        imageResize: {
          modules: ["Resize", "DisplaySize", "Toolbar"],
          handleStyles: {
            backgroundColor: "#4285f4",
            border: "2px solid white",
          },
        },
      }),
    }),
    [ImageResize]
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
  ];

  // Custom styles
  useEffect(() => {
    const style = `
      .ql-editor {
        font-size: 1.6rem;
        padding: 12px;
        min-height: 100px;
      }
      .ql-bubble .ql-tooltip {
        z-index: 1000;
      }
      .ql-image-resizing {
        opacity: 0.6;
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

    return () => document.head.removeChild(styleElement);
  }, []);
  return (
    <div>
      <ReactQuill
        theme="bubble"
        value={inputValue}
        modules={modules}
        formats={formats}
        onChange={inputChnageHandler}
        className={styles.editor_style}
        placeholder="Write your content here..."
        style={{
          height: "600px",
          background: "#fff",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default ReactQuillElement;
