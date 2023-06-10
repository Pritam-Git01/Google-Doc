import React from "react";
import styles from "./tools-sixth.module.css";

import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";

const ToolsF = () => {
  function handleAddEvent(command) {
    document.execCommand(command);
  }

  return (
    <div className={styles.sixth_container}>
      <FormatLineSpacingOutlinedIcon style={{fontSize: "1.2rem"}} onClick={() => handleAddEvent("")} />
      <ChecklistOutlinedIcon style={{fontSize: "1.2rem"}} onClick={() => handleAddEvent("")} />
      <FormatListBulletedOutlinedIcon style={{fontSize: "1.2rem"}}
        onClick={() => handleAddEvent("insertUnorderedList")}
      />
      <FormatListNumberedOutlinedIcon style={{fontSize: "1.2rem"}}
        onClick={() => handleAddEvent("insertOrderedList")}
      />
      <FormatIndentDecreaseOutlinedIcon style={{fontSize: "1.2rem"}}
        onClick={() => handleAddEvent("outdent")}
      />
      <FormatIndentIncreaseOutlinedIcon style={{fontSize: "1.2rem"}}
        onClick={() => handleAddEvent("indent")}
      />
    </div>
  );
};

export default ToolsF;
