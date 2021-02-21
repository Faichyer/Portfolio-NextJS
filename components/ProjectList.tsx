import React, { useEffect, useState } from 'react'
import Project from './Project'

interface CategoryType {
  id: number;
  name: string;
  active: boolean
}

const ProjectList = () => {

  const [categories, setCategories] = useState<CategoryType[]>([
    { id: 0, name: 'All work', active: true },
    { id: 1, name: 'Web', active: false },
    { id: 2, name: 'Mobile', active: false },
    { id: 3, name: 'Marketing', active: false }
  ]);

  const projects = [
    { id: 0, name: 'Amihan', description: 'Amihan Travel Tours is a company that organises all-in trips to different destinations ', date: '2018', img: 'Amihan.jpg', website: 'http://www.amihan.eu/', repo: '', categorie: 'Web', isActive: true, point: true, technologies: ['MySQL', 'PHP', 'HTML'] },
    { id: 1, name: 'WelcHome Immobilier', description: 'lorem ipsum', date: '2020', img: 'Welchome.jpg', website: 'http://welchome-immobilier.com/', repo: '', categorie: 'Marketing', isActive: false, point: false, technologies: ['Wordpress', 'Yoast SEO', 'Bulma'] },
    { id: 2, name: 'Agence Mof', description: 'lorem ipsum', date: '2019', img: 'Mof.jpg', website: 'http://agence-mof.online/', repo: '', categorie: 'Marketing', isActive: false, point: false, technologies: ['Wordpress', 'Yoast SEO', 'Elementor'] },
    { id: 3, name: 'BDE Ynov Lyon', description: 'lorem ipsum', date: '2020', img: 'appli-bde.jpg', website: '', repo: '', categorie: 'Mobile', isActive: false, point: false, technologies: ['Flutter', 'Firebase', 'Angular'] },
    { id: 4, name: 'Project Martin', description: 'lorem ipsum', date: '2020', img: 'Martin.jpg', website: '', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['Nuxt', 'GraphQL', 'MongoDB', 'Node.JS', 'Express'] },
    { id: 5, name: 'Spotify React', description: 'lorem ipsum', date: '2020', img: 'Spotify.jpg', website: 'https://github.com/Faichyer/spotify-react', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['React', 'TypeScript'] },
    { id: 5, name: 'Code Snippet', description: 'lorem ipsum', date: '2020', img: 'codesnippet.jpg', website: '', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['Vue', 'Electron', 'Node.JS', 'Express', 'MongoDB', 'RESTAPI'] }
  ]

  const handleClickCategory = (e: number) => {
    const Lamielle = categories.map((category) => {
      if (category.id === e){
        return {...category, active: !category.active}
      }else{
        return {...category, active: false}
      }
    })
    setCategories(Lamielle)
  }
  

  return (
    <div className="mx-auto container flex flex-col">

      <div className="grid grid-cols-4  xl:space-x-24 lg:space-x-16 md:space-x-8 space-x-0 max-w-full xl:text-3xl lg:text-3xl md:text-2xl text-xl py-2 px-4">
        {categories.map((category) => {
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
          categories.find(category => category.active === true).name === 'All work' ?
            projects.map((project, index) => {
              return <Project key={index} name={project.name} img={project.img} isActive={project.isActive} technologies={project.technologies} website={project.website} />
            }) :

            projects.filter(project => project.categorie === (categories.find(category => category.active === true).name)).map((project, index) => {
              return <Project key={index} name={project.name} img={project.img} isActive={project.isActive} technologies={project.technologies} website={project.website} />
            })
        }
      </div>
    </div >
  )
}

export default ProjectList
