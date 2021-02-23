import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { CategoryType } from '../types/CategoryType';
import { ProjectType } from '../types/ProjectType';
import Project from './Project'


export const getStaticProps: GetStaticProps = async (context) => {
  const getCategories = await fetch('/api/categories');
  const categoriesData = await getCategories.json();

  const getProjects = await fetch('/api/projects');
  const projectsData = await getProjects.json();

  console.log(getProjects, getCategories)
  return {
    props: {
      categories: categoriesData,
      projects: projectsData
    }
  }
}

interface ProjectListProps{
  categories: CategoryType[];
  projects: ProjectType[]
}

const ProjectList: React.FC<ProjectListProps> = ({ categories, projects }) => {

  const [catgrs, setCatgrs] = useState(null);

  useEffect(() => {
    setCatgrs(categories);
  }, [])

  const handleClickCategory = (e: number) => {
    const Lamielle = catgrs.map((category) => {
      if (category.id === e){
        return {...category, active: !category.active}
      }else{
        return {...category, active: false}
      }
    })
    setCatgrs(Lamielle)
  }
  

  return (
    <div className="mx-auto container flex flex-col">
      <div className="grid grid-cols-4  xl:space-x-24 lg:space-x-16 md:space-x-8 space-x-0 max-w-full xl:text-3xl lg:text-3xl md:text-2xl text-xl py-2 px-4">
        {catgrs && catgrs.map((category) => {
          return category.active === true ?
            <button key={category.id} onClick={() => handleClickCategory(category.id)} value={category.name} className="text-white cursor-pointer font-playfair focus:outline-none">
              {category.name}
            </button> :
            <button key={category.id} onClick={() => handleClickCategory(category.id)} value={category.name} className="text-gray-500 hover:text-white transition font-playfair duration-500 ease-in-out cursor-pointer focus:outline-none">
              {category.name}
            </button>
        })}

      </div>
      <div className="mt-16 place-items-center gap-x-0 w-full px-4 grid md:grid-cols-2 grid-cols-1 space-y-2 space-x-0 md:space-y-0">
        {
          catgrs && catgrs.find(category => category.active === true).name === 'All work' ?
            projects && projects.map((project, index) => {
              return <Project key={index} name={project.name} img={project.img} isActive={project.active} technologies={project.technologies} website={project.website} />
            }) :
            projects && projects.filter(project => project.categorie === (categories.find(category => category.active === true).name)).map((project, index) => {
              return <Project key={index} name={project.name} img={project.img} isActive={project.active} technologies={project.technologies} website={project.website} />
            })
        }
      </div>
    </div >
  )
}

export default ProjectList
