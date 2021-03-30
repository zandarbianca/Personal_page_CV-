import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const SidebarData = [

    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
        
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


