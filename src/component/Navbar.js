import React from "react";
import { IoIosMenu,IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import NavbarStyle from '../Navbar.module.css'
import { useState } from "react";
export default function Navbar() {
    const[icon ,setIcon] = useState(true)
    return(
        <>
        <div className={NavbarStyle.nav}>
        <div><h1 style={{color:"red" , textShadow: "2px 2px white" ,textDecoration :"underline"}}>Project</h1></div>
        <div className={NavbarStyle.links} id={icon ? "" : NavbarStyle.menu}>
        <Link className={NavbarStyle.link}  to='/'>Home</Link>
        <br/>
        <Link   className={NavbarStyle.link} to='/register'>Register</Link>
        <br/>
        <Link  className={NavbarStyle.link} to='/login'>Login</Link>
        </div>

        <div className={NavbarStyle.icon}>

        {icon ? 
        <IoIosMenu onClick={()=>setIcon(false)} style={{fontSize: "3em"}}></IoIosMenu>
        :
        <IoMdClose  onClick={()=>setIcon(true)} style={{fontSize: "3em"}}></IoMdClose>
        }
        </div>
        </div>
        
        </>
    )
}