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
        <div id="icon" className="row">{_SidebarData[0].icon  } {_SidebarData[0].title  } </div> 
        </Link>
        <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[1].icon  } {_SidebarData[1].title  } </div> 
        </Link>
        {/* <Link activeClass="active" to="test3" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[2].icon  } {_SidebarData[2].title  } </div> 
        </Link> */}
        <Link activeClass="active" to="test4" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[3].icon  } {_SidebarData[3].title  } </div> 
        </Link>
        <Link activeClass="active" to="test5" spy={true} smooth={true} offset={50} duration={500} >
        <div id="icon" className="row">{_SidebarData[4].icon  } {_SidebarData[4].title  } </div> 
        </Link>
        </Grid>
        
            {/* {SidebarData.map((val,key)=>{
                return (
                <li 
                key={key} 
                className="row"
                id={window.location.pathname == val.link ? "active" : ""} 
                onClick={() => {
                    window.location.pathname= val.link;
                    }}>
                    {" "}
                        <div id="icon">{val.icon}</div> 
                        <div id="title"> {val.title} </div>
                    </li>


                );
                
            })} */}
               </ul>
            
        </div>
        
        </>
    )
}

export default Sidebar


// // ES6 Imports
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// // Or Access Link,Element,etc as follows
// let Link      = Scroll.Link;
// let Element   = Scroll.Element;
// let Events    = Scroll.Events;
// let scroll    = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;



//   render: function () {
//     return (
//       <div>
//         <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
//           Test 1
//         </Link>
//         <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
//           Test 2 (delay)
//         </Link>
//         <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
//           Test 6 (anchor)
//         </Link>
//         <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
//           Test 2
//         </Button>

//         <Element name="test1" className="element">
//           test 1
//         </Element>

//         <Element name="test2" className="element">
//           test 2
//         </Element>

//         <div id="anchor" className="element">
//           test 6 (anchor)
//         </div>

//                                         <Link to="firstInsideContainer" containerId="containerElement">
//                                         Go to first element inside container
//                                         </Link>

//         <Link to="secondInsideContainer" containerId="containerElement">
//           Go to second element inside container
//         </Link>
//         <div className="element" id="containerElement">
//                                     <Element name="firstInsideContainer">
//                                         first element inside container
//                                     </Element>

//           <Element name="secondInsideContainer">
//             second element inside container
//           </Element>
//         </div>

//         <a onClick={this.scrollToTop}>To the top!</a>
//         <br/>
//         <a onClick={this.scrollToBottom}>To the bottom!</a>
//         <br/>
//         <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
//         <br/>
//         <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
//       </div>
//     );
//   }
// });

// React.render(
//   <Section />,
//   document.getElementById('example')
// );