import React from "react";
import Navbar from "./Navbar";
import HomeStyle from './Home.module.css'
export default function Home() {
    return(
        <>
        <Navbar/>
        
        <div className={HomeStyle.bg}>
    
        <h3>Team Members</h3>
        <p>MD ASHARUDDIN</p>
        <p>RICHA BHARTI</p>
        <p>MOHIT SHARMA</p>
        <p>AKASH DUTTA</p>
        </div>
        </>
    )
}