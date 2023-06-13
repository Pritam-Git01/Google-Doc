import React from 'react'
import styles from './tools-third.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const ToolsC = () => {

    const [count,setCount] = useState(8);

    const handleDec = () => {
        if(count > 1){
            setCount(pre => pre-1)
            document.execCommand("fontSize", "",count)
        }
    }
    function handleInc () {
        setCount(pre => pre+1)
        document.execCommand("fontSize", "", count)
    }

  return (
    <div className={styles.third_container}>
       <RemoveIcon style={{fontSize: "1rem"}} onClick={ handleDec}/>
        <button style={{width: "2rem"}}>{count}</button>
        <AddIcon style={{fontSize: "1rem"}} onClick= { handleInc}/>
    </div>
  )
}

export default ToolsC;