import "../style/ProjectCard.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useEffect, useRef, useState} from "react";

export const ProjectCard = ({project}) => {

    const [projectInfo, setProjectInfo] = useState(false)
    const info = useRef(null)
    useEffect(() => {
        // console.log(info?.current?.style)
        (projectInfo) ? info.current.style.display = 'block' : info.current.style.display = 'none'
    },[projectInfo])

    return (
        <div
            className="ProjectCard"
            style={{background: `url('${project.image}') no-repeat center center/cover`}}
            onMouseEnter={() => {
                setProjectInfo(true)

                // console.log(info)
            }}
            onMouseLeave={() => {
                setProjectInfo(false)
            }}
        >
            {/*{projectInfo &&*/}
                <div className="ProjectCard_Info" ref={info}>
                    <h4 className="ProjectCard_Info_Name">{project.projectName}</h4>
                    <div className="ProjectCard_Info_IconList">
                        <a href={project.github} className="ProjectCard_Info_IconList_Link">
                            <GitHubIcon className="ProjectCard_Info_IconList_Link_Icon"/>
                        </a>
                        { project.url && <a href={project.url} className="ProjectCard_Info_IconList_Link">
                            <VisibilityIcon className="ProjectCard_Info_IconList_Link_Icon"/>
                        </a>}
                    </div>
                    <div className="ProjectCard_Info_SkillList">
                        {project.skills.map((skill, index) => <div className="ProjectCard_Info_SkillList_Skill"
                                                                   key={index}>{skill}</div>)}
                    </div>
                </div>
            {/*}*/}
        </div>
    )
}