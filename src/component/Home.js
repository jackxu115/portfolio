import galaxy from "../media/galaxy.jpg"
import "../style/Home.scss"
import {useEffect, useState} from "react";

export const Home = () => {

    return (
        <div className="Home">
            <section id="home" className="Home_Section">
                <div className="Home_Name">Jack Xu</div>
                <div className="Home_Title">Full Stack Developer</div>
            </section>
        </div>
    )
}