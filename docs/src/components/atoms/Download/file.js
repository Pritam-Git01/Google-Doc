import React from "react";
import { Dialog,DialogContent, DialogContentText } from "@mui/material";
import styles from "./file.module.css";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ArticleIcon from '@mui/icons-material/Article';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';



const File = () => {
  const [open,setOpen] = useState(false);
  async function handleDownloadPdf (myDiv){
    const sheetContent = document.getElementById(myDiv);
  const canvas = await html2canvas(sheetContent,);
  const imageData = canvas.toDataURL("image/png");
  const pdfDoc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: false,
  });
  pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
  pdfDoc.save(`myDiv.pdf`);
  console.log(document.getElementById(myDiv).innerHTML)
  }

  
  return (
    <>
      <span onClick={() => setOpen(true)}>File</span>
     
 <Dialog PaperProps={{sx: {width: "18vw" , height: "62vh", position: "absolute", top: "4rem", left: "2rem"}}} open={open} onClose={() => setOpen(false)}> 
         <DialogContent className={styles.content}>
          <DialogContentText>
          <div ><ArticleIcon/><span>New</span></div>
          
        
        <div><FolderOpenOutlinedIcon/><span>Open</span></div>
        <div><ContentCopyOutlinedIcon/><span>Make a Copy</span></div>
        <div></div>
        <div ><PersonAddAltOutlinedIcon/><span>Share</span></div>
        <div><EmailOutlinedIcon/><span>Email</span></div>
        <div><DownloadOutlinedIcon style={{cursor: "pointer"}}onClick={() => handleDownloadPdf("myDiv")}/><span style={{cursor: "pointer"}} onClick={() => handleDownloadPdf("myDiv")}>Download</span></div>
        <div></div>
        <div ><DriveFileRenameOutlineOutlinedIcon/><span>Rename</span></div>
        <div><DeleteOutlineOutlinedIcon/><span>Move to Bin</span></div>
        <div className={styles.underline}></div>
        <div><HistoryOutlinedIcon/><span>Version History</span></div>
        <div ><OfflinePinOutlinedIcon/><span>Make Available Offline</span></div>
        </DialogContentText>

        </DialogContent>
        

      </Dialog> 
    </>
  );
};

export default File;
