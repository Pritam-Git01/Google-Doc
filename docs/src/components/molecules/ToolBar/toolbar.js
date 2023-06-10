import React from 'react';
import styles from "./toolbar.module.css";
import ToolsA from '../../atoms/Tools/Tools-A/tools-first';
import ToolsB from '../../atoms/Tools/Tools-B/tools-sec';
import ToolsC from '../../atoms/Tools/Tools-C/tools-third';
import ToolsD from '../../atoms/Tools/Tools-D/tools-fourth';
import ToolsE from '../../atoms/Tools/Tools-E/tools-fifth';
import ToolsF from '../../atoms/Tools/Tools-F/tools-sixth';
import DropDown from '../../atoms/DropDown/dropdown';

const Toolbars = () => {
  return (
    <div className={styles.toolbar_container}>
        <ToolsA/>
        <ToolsB/>
        <ToolsC/>
        <ToolsD/>
        <ToolsE/>
        <DropDown/>
        <ToolsF/>
    </div>
  )
}

export default Toolbars;