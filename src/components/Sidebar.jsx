import React from "react";

import {SidebarData} from './SidebarData.jsx';
import { Link, Element} from 'react-scroll'
import Contact from '../pages/Contact.jsx';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Grid } from "@material-ui/core";

export const _SidebarData = [

    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",

    },
    {
        title: "Despre",
        icon: <FaceIcon />,
        link: "/despre"
        
    },

    {
        title: "Voluntariat",
        icon: <CardTravelIcon />,
        link: "/Voluntariat"
    },

    {
        title: "Hard Skills",
        icon: <CodeIcon />,
        link: "/hardskills"
    },
    {
        title: "Contact",
        icon: <ContactMailIcon />,
        link: "/contact"
    },

]



const Sidebar = () => {
    return (
        <>
        <div className="Sidebar">
             <ul className="SidebarList">
        <Grid xs={12}>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[0].icon }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{_SidebarData[0].title  } </div> 
        </Link>
        <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[1].icon  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{_SidebarData[1].title  } </div> 
        </Link>
        <Link activeClass="active" to="test4" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[3].icon  }&nbsp;&nbsp;&nbsp;&nbsp;{_SidebarData[3].title  } </div> 
        </Link>
        <Link activeClass="active" to="test5" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[4].icon  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{_SidebarData[4].title  } </div> 
        </Link>
        </Grid>
        
               </ul>
            
        </div>
        
        </>
    )
}

export default Sidebar