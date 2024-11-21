import Contact from './components/Contact';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Intro from './components/Intro';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="bg-neutral-800 col-span-1 p-4 py-8 lg:flex-col flex items-center">
          <Profile />
          <div className='py-8 w-full flex flex-col gap-3'>
            <Contact />
            <Skills />
            <Education />
          </div>
        </div>
        <div className="col-span-3">
          <Intro />
          <Experiences />
        </div>
      </div>
      
    </div>
  )
}

export default App
