import React from 'react'
import Project from './Project'

const ProjectList = () => {

  const categories = [
    { id: 0, name: 'All work', active: true },
    { id: 1, name: 'Web', active: false },
    { id: 2, name: 'Mobile', active: false },
    { id: 3, name: 'Marketing', active: false }
  ]

  const projects = [
    { id: 0, name: 'Amihan', description: 'Amihan Travel Tours is a company that organises all-in trips to different destinations ', date: '2018', img: 'Amihan.jpg', website: 'http://www.amihan.eu/', repo: '', categorie: 'Web', isActive: true, point: true, technologies: ['MySQL', 'PHP', 'HTML'] },
    { id: 1, name: 'WelcHome Immobilier', description: 'lorem ipsum', date: '2020', img: 'Welchome.jpg', website: 'http://welchome-immobilier.com/', repo: '', categorie: 'Marketing', isActive: false, point: false, technologies: ['Wordpress', 'Yoast SEO', 'Bulma'] },
    { id: 2, name: 'Agence Mof', description: 'lorem ipsum', date: '2019', img: 'Mof.jpg', website: 'http://agence-mof.online/', repo: '', categorie: 'Marketing', isActive: false, point: false, technologies: ['Wordpress', 'Yoast SEO', 'Elementor'] },
    { id: 3, name: 'BDE Ynov Lyon', description: 'lorem ipsum', date: '2020', img: 'appli-bde.jpg', website: '', repo: '', categorie: 'Mobile', isActive: false, point: false, technologies: ['Flutter', 'Firebase', 'Angular'] },
    { id: 4, name: 'Project Martin', description: 'lorem ipsum', date: '2020', img: 'Martin.jpg', website: '', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['Nuxt', 'GraphQL', 'MongoDB', 'Node.JS', 'Express'] },
    { id: 5, name: 'Spotify React', description: 'lorem ipsum', date: '2020', img: 'Spotify.jpg', website: 'https://github.com/Faichyer/spotify-react', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['React', 'TypeScript'] },
    { id: 5, name: 'Code Snippet', description: 'lorem ipsum', date: '2020', img: 'codesnippet.jpg', website: '', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['Vue', 'Electron', 'Node.JS', 'Express', 'MongoDB', 'RESTAPI'] }
  ]

  return (
    <div className="mx-auto container flex flex-col">

      <div className="grid grid-cols-4  xl:space-x-24 lg:space-x-16 md:space-x-8 space-x-0 max-w-full xl:text-3xl lg:text-3xl md:text-2xl text-xl py-2 px-4">
        {categories.map((category) => {
          return category.active ?
            <div className="text-white cursor-pointer font-playfair">
              {category.name}
            </div> :
            <div className="text-gray-500 hover:text-white transition font-playfair duration-500 ease-in-out cursor-pointer">
              {category.name}
            </div>
        })}

      </div>
      <div className="mt-16 place-items-center gap-x-0 w-full px-4 grid md:grid-cols-2 grid-cols-1 space-y-2 space-x-0 md:space-y-0">
        {
          categories.find(category => category.active === true).name === 'All work' ?
            projects.map((project) => {
              return <Project key={project.id} name={project.name} img={project.img} isActive={project.isActive} technologies={project.technologies} website={project.website} />
            }) :

            projects.filter(project => project.categorie === (categories.find(category => category.active === true).name)).map((project) => {
              return <Project key={project.id} name={project.name} img={project.img} isActive={project.isActive} technologies={project.technologies} website={project.website} />
            })
        }
      </div>
    </div >
  )
}

export default ProjectList
