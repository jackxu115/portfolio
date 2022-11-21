import "../style/Header.scss"
import logo from "../media/Logo.jpg"

export const Header = () => {
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
            </div>
        </div>
    )
}