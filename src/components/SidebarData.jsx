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
import Avatar from '@material-ui/core/Avatar';

export const SidebarData = [
    <Avatar  />,
    <Avatar  />,
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
    <Avatar  />,
    <Avatar  />,
    <Avatar  />,
    <Avatar  />,
    <Avatar  />,
    <Avatar  />,
]


