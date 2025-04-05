import React, { useReducer } from 'react';

import { IoFilter } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { FaGhost } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import Link from './link';

import SectionTitle from './section-title';
import { Tech, Project, projects, AllTech } from '../constants';
import GithubLink from './github-link';


enum Action { push, pop }
type ReducerProps = {type: Tech, action: Action}; 

type TagProps = {
  type: Tech,
  selectedTech: Tech[], 
  dispatch: ({type, action}: ReducerProps) => void,
}

const TechTag: React.FC<TagProps> = ({type, selectedTech, dispatch}: TagProps): JSX.Element => {
  enum selectedState {
    selected = "selected", 
    unselected = "unselected",
    default = "default",
  }
  const currentState: selectedState = ((): selectedState => {
    if(selectedTech.length) {
      return selectedTech.includes(type) ? selectedState.selected : selectedState.unselected
    }
    return selectedState.default
  })()

  const popSelf = () => dispatch({type, action: Action.pop})
  const pushSelf = () => dispatch({type, action: Action.push})

  return <button
    className={"tech-tag " + currentState + " " + Tech[type]}
    onClick={currentState === selectedState.selected ? popSelf : pushSelf}
  >
    {Tech[type]}
    {false && currentState === selectedState.selected && <TiDelete/>}
  </button>
}

type ItemProps = {
  project: Project;
  selectedTech: Tech[],
  dispatch: ({type, action}: ReducerProps) => void,
}

const ProjectItem: React.FC<ItemProps> = ({project, selectedTech, dispatch}: ItemProps): JSX.Element => {
  const { title, shortDescription, techStack, links, projectId}: Project = project;
  return <div className="projects-list-item raised-box">
    <div>
      <div className='title-row'>
        <Link className='title' to={"/project/" + projectId}>
          {project.underConstruction ? "⚠️ " : <BiLink/>}
          {title}
        </Link>
        {links?.map((link, key)=>
          <GithubLink key={key} {...link}/>
        )}
      </div>
      <div id="hline" style={{width: "50%", margin: "2px 0px 10px"}}/>
      <p className='description'>{shortDescription}</p>
    </div>
    <div className='tech-tag-list'>
      {techStack.map((type: Tech, key) => <TechTag {...{type, selectedTech, dispatch, key}}/>)}
    </div>
  </div>
}

const ProjectList: React.FC<{}> = (): JSX.Element => {
  const [selectedTech, dispatch]: [Tech[], ({type, action}: ReducerProps) => void] = useReducer(
    (state: Tech[], {type, action}: ReducerProps): Tech[] => {
      if(action === Action.push && !state.includes(type)) {
        return [type, ...state];
      } else if (action === Action.pop) {
        const newState = [...state.filter(t => t !== type)];
        return newState;
      }
      return state;
    },
    [],
  );

  const selectedProjects: Project[] = 
    selectedTech.length 
      ? projects.filter(({techStack}: Project) => {
          const foundTech: number[] = selectedTech.map((t: Tech) => techStack.indexOf(t))
          return foundTech.every(index => index > -1)
        })
      : projects;
  
  selectedProjects.sort((a, b) => (a.underConstruction ? 1 : 0) - (b.underConstruction ? 1 : 0))

  return <div className="section-container">
    <SectionTitle id="projects">Past Projects</SectionTitle>
    <div className="projects-list-filters">
      <IoFilter size={30}/>
      <p>Filter:</p>
      <div>
        {AllTech.map((type, key) => <TechTag {...{type, key, selectedTech, dispatch}}/>)}
      </div>
    </div>
    <div className="projects-list">
      {selectedProjects.map((project, key) => <ProjectItem {...{project, selectedTech, dispatch, key}}/>)}
    </div>
    {selectedProjects.length === 0 && <div className="empty-projects-list">
        <FaGhost/>
        <p>No projects found with those filters.</p>
    </div>}
  </div>
}

export default ProjectList;