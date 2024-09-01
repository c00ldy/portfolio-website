import './App.css'


//////////////////////
//components imports//
//////////////////////


import Navbar from './Components/Navbar'
import Coldy from './Components/Coldy'
import About from './Components/About'
import Technology from './Components/Technology'
import Experiance from './Components/Experiance'
import Project from './Components/Project'
import Contect from './Components/Contect'

//---------------------------------------------------------//


export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900" >
      <div className='fixed top-0 -z-10 h-full w-full' >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='container mx-auto px-8' >
        <Navbar />
        <Coldy />
        <Technology />
        <About />
        <Experiance />
        <Project />
        <Contect/>
      </div>
    </div>
  )
}

