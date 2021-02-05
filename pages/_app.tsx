import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import '../styles/globals.css'

function MyApp() {
  return <div className="bg-background">
    <Navbar />
    <Intro />
    <ProjectList />
    <Footer />
  </div>
}

export default MyApp
