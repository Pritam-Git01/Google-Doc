import React from "react";
import styles from "./tools-sec.module.css";

const ToolsB = () => {
  const ar_text = [
    { heading: "Normal text", tag: "p" },
    { heading: "Title", tag: "h1" },
    { heading: "Subtitle", tag: "h4" },
    { heading: "Heading1", tag: "h2" },
    { heading: "Heading2", tag: "h3" },
    { heading: "Heading3", tag: "h5" },
    { heading: "Heading4", tag: "h6" }
  ];
  const fontFamily = [
    "Arial",
    "serif",
    "arial",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];

  function handleText(value) {
    document.execCommand("formatBlock", "", value);
  }
  function handleFont(value) {
    document.execCommand("fontName", "", value);
  }
  return (
    <div className={styles.second_container}>
      <div>
        <select className={styles.text_container} onChange={(e) => handleText(e.target.value)}>
          {ar_text.map((ele) => (
            <option value={ele.tag}>{ele.heading}</option>
          ))}
        </select>
      </div>
      <div>
        <select className={styles.font_container} onChange={(e) => handleFont(e.target.value)}>
          {fontFamily.map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToolsB;
