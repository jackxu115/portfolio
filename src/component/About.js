import "../style/About.scss"
import {Background} from "./Background";
import {Skills} from "./Skills";

export const About = () => {
    return (
        <div className="About">
            <section id="about" className="About_Section">
                <div className="About_Section_Intro">
                    <h3>About <span>Me</span></h3>
                    <p>My name is Jack Xu and I am graduated from BCIT,
                        majoring in Computing Systems Technology.
                        I have a passion for all things technology.
                    </p>
                    <p>In addition to my love of technology. I am also
                        interested in sport, game, and movie.
                    </p>
                    <p>Below are projects I have developed over my
                        five years of coding experience.
                    </p>
                </div>
                <div className="About_Section_MySkills">
                    <h3>My <span>Skills</span></h3>
                    <Skills/>
                </div>
            </section>
            <Background/>
        </div>
    )
}