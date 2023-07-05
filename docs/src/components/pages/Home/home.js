import React from 'react'
import NavBar from '../../molecules/Navbar/navbar'
import TextArea from '../../organism/TextArea/textArea';
import Toolbars from '../../molecules/ToolBar/toolbar';


const Home = () => {
  return (
    <div >
    <NavBar/>
    <Toolbars/>
    <TextArea/>
    </div>
  )
}

export default Home;