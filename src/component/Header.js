import "../style/Header.scss"
import logo from "../media/Logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import {useRef, useState} from "react";
import EmailIcon from "../media/icons8-gmail-logo-96.png";
import GitHubIcon from "../media/icons8-github-96.png";
import LinkedInIcon from "../media/icons8-linkedin-96.png";

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
                <a href="mailto:pengxu19890115@gmail.com" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>
                    <img src={EmailIcon} alt="Email" className="Header_NavbarRD_Icon"/>
                </a>
                <a href="https://github.com/jackxu115" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>
                    <img src={GitHubIcon} alt="GitHub" className="Header_NavbarRD_Icon"/>
                </a>
                <a href="" onClick={() => {
                    navbarRD.current.classList.remove('show')
                }}>
                    <img src={LinkedInIcon} alt="LinkedIn" className="Header_NavbarRD_Icon"/>
                </a>
            </div>
        </div>
    )
}