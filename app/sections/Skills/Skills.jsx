import { useContext } from 'react'
import { DarkModeContext } from "../../context/DarkModeContext"
import Skill from '../../components/Skill/Skill'
import skills from '../../assets/data';
import './Skills.css'

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div style={{backgroundColor: darkMode ? '#fff' : '#16181d'}} className={`flex lg:flex-row flex-col divide-y-2 lg:divide-y-0 lg:divide-x-2 justify-center items-center lg:items-start py-6 h-4/6 w-11/12 lg:w-7/12 rounded-3xl border-2 ${darkMode ? "border-gray-200" : "border-gray-700"}  shadow-sm negative mt-20`}>
        {skills.map(({id, icon, title, desc, app, title1, title2, tools}) => {
            return(
                <Skill key={id} icon={icon} title={title} description={desc} applications={app} title1={title1} title2={title2} tools={tools}/>
            )
        })}
    </div>
  )
}

export default Skills