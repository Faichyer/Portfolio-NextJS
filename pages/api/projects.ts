export default (req, res) => {
  res.statusCode = 200
  res.json([
    { id: 0, name: 'Amihan', description: 'Amihan Travel Tours is a company that organises all-in trips to different destinations ', date: '2018', img: 'Amihan.jpg', website: 'http://www.amihan.eu/', repo: '', categorie: 'Web', active: true, technologies: ['MySQL', 'PHP', 'HTML'] },
    { id: 1, name: 'WelcHome Immobilier', description: 'lorem ipsum', date: '2020', img: 'Welchome.jpg', website: 'http://welchome-immobilier.com/', repo: '', categorie: 'Marketing', active: false, technologies: ['Wordpress', 'Yoast SEO', 'Bulma'] },
    { id: 2, name: 'Agence Mof', description: 'lorem ipsum', date: '2019', img: 'Mof.jpg', website: 'http://agence-mof.online/', repo: '', categorie: 'Marketing', active: false, technologies: ['Wordpress', 'Yoast SEO', 'Elementor'] },
    { id: 3, name: 'BDE Ynov Lyon', description: 'lorem ipsum', date: '2020', img: 'appli-bde.jpg', website: '', repo: '', categorie: 'Mobile', active: false, technologies: ['Flutter', 'Firebase', 'Angular'] },
    { id: 4, name: 'Project Martin', description: 'lorem ipsum', date: '2020', img: 'Martin.jpg', website: '', repo: '', categorie: 'Web', active: false, technologies: ['Nuxt', 'GraphQL', 'MongoDB', 'Node.JS', 'Express'] },
    { id: 5, name: 'Spotify React', description: 'lorem ipsum', date: '2020', img: 'Spotify.jpg', website: 'https://github.com/Faichyer/spotify-react', repo: '', categorie: 'Web', active: false, technologies: ['React', 'TypeScript'] },
    { id: 5, name: 'Code Snippet', description: 'lorem ipsum', date: '2020', img: 'codesnippet.jpg', website: '', repo: '', categorie: 'Web', active: false, technologies: ['Vue', 'Electron', 'Node.JS', 'Express', 'MongoDB', 'RESTAPI'] }
  ])
}