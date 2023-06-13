import React from "react";
import styles from "./tools-fourth.module.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import { FaHighlighter } from "react-icons/fa";
import { useRef, useState } from "react";

const ToolsD = () => {
  const colorRef = useRef();
  const bgRef = useRef(null);
  const [color, setColor] = useState();
  function handleCommand(command) {
    document.execCommand(command, false, "");
  }

  function handleColorClick() {
    colorRef.current.click();
  }
  function handleColorChange(e) {
    document.execCommand("foreColor", "", e.target.value);
    setColor(e.target.value);
  }
  function handleBackgroundClick() {
    bgRef.current.click();
  }

  function handleBackgroundChange(value) {
    document.execCommand("backColor", "", value);
  }
  return (
    <div className={styles.fourth_container}>
      <FormatBoldIcon
        style={{ fontSize: "1.2rem" }}
        onClick={() => handleCommand("bold")}
      />
      <FormatItalicIcon
        style={{ fontSize: "1.2rem" }}
        onClick={() => handleCommand("italic")}
      />
      <FormatUnderlinedIcon
        style={{ fontSize: "1.2rem" }}
        onClick={() => handleCommand("underline")}
      />
      <TextFormatIcon onClick={handleColorClick} />
      <input
        type="color"
        ref={colorRef}
        onChange={handleColorChange}
        
        style={{ display: "none" }}
      />

      <button className={styles.btn} onClick={handleBackgroundClick}>
        <FaHighlighter style={{ fontSize: "1rem" }} />
      </button>
      <input
        type="color"
        ref={bgRef}
        onChange={(e) => handleBackgroundChange(e.target.value)}
        style={{ display: "none" }}
     
      />
    </div>
  );
};

export default ToolsD;
