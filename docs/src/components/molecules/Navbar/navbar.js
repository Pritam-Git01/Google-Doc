
import React from "react";
import "./navbar.css";
import HistoryIcon from "@mui/icons-material/History";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import File from "../../atoms/Download/file";


const NavBar = () => {
    return (
        <div>
            <nav
                className="navBar"
                style={{ position: "-webkit-sticky", top: 0 }}
            >
                <div className="left">
                    <img
                        className="pointer"
                        width="48"
                        height="48  "
                        src="https://img.icons8.com/color/48/000000/google-docs--v1.png"
                        alt="google-docs--v1"
                    />
                    <div className="leftDetails">
                        <div className="name">
                            <input
                                className="pointer"
                                id="heading"
                                type="text"
                                placeholder="Untitled Document"
                            />
                            
                            <DriveFileMoveOutlinedIcon
                                sx={{
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    position: "relative",
                                    top: "3px",
                                    paddingRight: "10px",
                                }}
                            />
                            <CloudDoneOutlinedIcon
                                sx={{
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    position: "relative",
                                    top: "3px",
                                    paddingRight: "10px",
                                }}
                            />
                        </div>
                        <div className="list">
                            <ul>
                                <li className="pointer"><File/></li>
                                
                                <li className="pointer">Edit</li>
                                <li className="pointer">View</li>
                                <li className="pointer">Insert</li>
                                <li className="pointer">Format</li>
                                <li className="pointer">Tools</li>
                                <li className="pointer">Extensions</li>
                                <li className="pointer">Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <HistoryIcon
                        className="icon"
                        sx={{
                            cursor: "pointer",
                            fontSize: "28px",
                            color: "#404040",
                            margin: " 0 13px",
                            padding: "2px 2px",
                        }}
                    />
                    <CommentOutlinedIcon
                        className="icon"
                        sx={{
                            cursor: "pointer",
                            fontSize: "23px",
                            color: "#404040",
                            margin: " 0 13px",
                            padding: "2px 2px",
                        }}
                    />
                    <span>
                        <VideocamOutlinedIcon
                            className="icon"
                            sx={{
                                cursor: "pointer",
                                fontSize: "28px",
                                color: "#404040",
                                margin: " 0 13px",
                                padding: "2px 2px",
                            }}
                        />
                        <ArrowDropDownIcon
                            fontSize="small"
                            sx={{
                                cursor: "pointer",
                                color: "#404040",
                                position: "relative",
                                top: "-10%",
                                right: "5%",
                                padding: "2px 2px",
                            }}
                        />
                    </span>
                    <span className="share pointer">
                        <LockOutlinedIcon
                            sx={{
                                color: "#001d35",
                                cursor: "pointer",
                                fontSize: "20px",
                                // color: "#404040",
                                marginRight: "3px",
                                padding: "0px 2px",
                            }}
                        />
                        <span className="write">Share</span>
                    </span>
                    <AccountCircleIcon
                        sx={{
                            cursor: "pointer",
                            fontSize: "35px",
                            margin: " 0px 13px",
                            padding: "2px 2px",
                        }}
                    />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;