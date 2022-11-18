import "../style/Projects.scss"
import {ProjectCard} from "./ProjectCard";
import {projectList} from "../Helper";
import {Background} from "./Background";

export const Projects = () => {



    return (
        <div className="Projects">
            <section id="projects" className="Projects_Section">
                <h3>Projects</h3>
                <div className="Projects_Section_List">
                    {projectList.map((project, index) => <ProjectCard key={index} project={project}/>)}
                </div>
            </section>
            {/*<Background/>*/}
        </div>
    )
}