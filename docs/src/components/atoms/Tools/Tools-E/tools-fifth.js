import React from 'react'
import styles from './tools-fifth.module.css'
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import AddCommentIcon from '@mui/icons-material/AddComment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useRef} from 'react'
const ToolsE = () => {
  const linkRef = useRef(null)
  const imgRef = useRef(null)
  
  function handleLink(){
    linkRef.current.click()
  }
  function handleInserLink(e){
   document.execCommand('createLink',{ text: 'Links', url: e.target.value, title : 'Link' });
  }
  function handleImage(){
 imgRef.current.click()
  }
  
  function handleImageChange(event){
    // setimgData(event.target.files[0])
    if((event.target.files[0])) {
        let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "50%"; 
      img.style.maxHeight = "50%"; 

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    
    }
    

    
  }

 
  return (
    <div className={styles.fifth_container}>
      <InsertLinkIcon style={{fontSize: "1rem"}} onClick={handleLink}/>
       <input onChange={handleInserLink} type="url" ref={linkRef} style={{display: "none"}} />
        <AddCommentIcon/>
  <  ImageOutlinedIcon style={{fontSize: "1rem"}}n onClick={handleImage}/>  
        <input type="file" ref={imgRef} onChange={handleImageChange} style={{display: "none"}} />
    </div>
  )
}

export default ToolsE;