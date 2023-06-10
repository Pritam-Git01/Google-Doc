import React from 'react'
import styles from './dropdown.module.css'
import {CiTextAlignLeft} from 'react-icons/ci'
import {CiTextAlignRight} from 'react-icons/ci'
import {BsJustify} from 'react-icons/bs'
import {BsTextCenter} from 'react-icons/bs'
import {useState} from 'react'

const DropDown = () => {
    const [btn,setBtn]=useState(true)
   function handleAddEvent(command){
        document.execCommand(command)
        setBtn(!btn)
    }
    function handleBtn(){
        setBtn(!btn)
    }
  return (
   <div className={styles.container}> {btn?<div><button onClick={handleBtn}><CiTextAlignLeft/></button></div>:<div className={styles.dropDown}>
    <button><CiTextAlignLeft  onClick={()=>handleAddEvent("justifyleft")}/></button>
    <button><CiTextAlignRight  onClick={()=>handleAddEvent("justifyRight")}/></button>
    <button ><BsTextCenter onClick={()=>handleAddEvent("justifyCenter")}/></button>
    <button ><BsJustify onClick={()=>handleAddEvent("justifyFull")}/></button>

</div>}</div>
    
  )
}

export default DropDown