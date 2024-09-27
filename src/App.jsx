// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Profile from './components/Profile';

function App() {

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="bg-neutral-800 col-span-1 h-screen p-4 py-8 flex-col flex items-center">
          <Profile />
          <h2>BIO</h2>
          <h2>CONTACT</h2>
          <h2>Skills</h2>
        </div>
        <div className="col-span-3">
          <h1 className="text-3xl font-bold underline bg-emerald-700 p-8">
            Intro
          </h1>
          <h1 className="text-3xl font-bold underline">
            Experiences
          </h1>
          <h1 className="text-3xl font-bold underline">
            Personal Projects
          </h1>
          <h1 className="text-3xl font-bold underline">
            Education
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default App
