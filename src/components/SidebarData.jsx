import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import TranslateIcon from '@material-ui/icons/Translate';
import ContactMailIcon from '@material-ui/icons/ContactMail';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "#home"
    },
    {
        title: "Despre",
        icon: <FaceIcon />,
        link: "/despre"
        
    },
    {
        title: "Educatie",
        icon: <SchoolIcon />,
        link: "/educatie"
    },
    {
        title: "Experienta profesionala",
        icon: <CardTravelIcon />,
        link: "/educatieprofesionala"
    },
    {
        title: "Certificari",
        icon: <AttachFileIcon />,
        link: "/certificari"
    },
    {
        title: "Hard Skills",
        icon: <CodeIcon />,
        link: "/hardskills"
    },
    {
        title: "Soft Skills",
        icon: <GroupIcon />,
        link: "/softskills"
    },
    {
        title: "Limbi Straine",
        icon: <TranslateIcon />,
        link: "/limbisraine"
    },
    {
        title: "Contact",
        icon: <ContactMailIcon />,
        link: "/contact"
    }
]


