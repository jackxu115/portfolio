import "../style/Header.scss"
import logo from "../media/Logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import {useRef, useState} from "react";

export const Header = () => {

    const navbarRD = useRef()

    return (
        <div className="Header">
            <div className="Header_Logo">
                <a href="#home"><img src={logo} alt="Logo"/></a>
            </div>
            <div className="Header_Navbar">
                <div className="Header_Navbar_Home"><a href="#home">Home</a></div>
                <div className="Header_Navbar_About"><a href="#about">About</a></div>
                {/*<div className="Header_Navbar_Skills"><a href="#skills">Skills</a></div>*/}
                <div className="Header_Navbar_Projects"><a href="#projects">Projects</a></div>
                <MenuIcon className="Header_Navbar_Menu" style={{fontSize: 'xx-large'}}
                          onClick={() => {
                              navbarRD.current.classList.add('show')
                          }}/>
            </div>
            <div className="Header_NavbarRD" ref={navbarRD}>
                <div className="Header_NavbarRD_Logo">
                    <a href="#home"><img src={logo} alt="Logo"/></a>
                </div>
                <div className="Header_NavbarRD_Home"><a href="#home" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>Home</a></div>
                <div className="Header_NavbarRD_About"><a href="#about" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>About</a></div>
                <div className="Header_NavbarRD_Projects"><a href="#projects" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>Projects</a></div>
                <div className="Header_NavbarRD_Close" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>X
                </div>
            </div>
        </div>
    )
}