import React  from 'react'
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
// import Services from './Components/Services';

function App() {
  // var [a,b]= useState(22);
  return (
    <>
    <Nav/>
    <About/>
    <Contact/>
    {/* <Services/> */}
      {/* <div className="w-full h-screen bg-zinc-700 text-white">
        <h1 className='text-2xl '>Hello Let's Start</h1> */}
        {/* </div> */}
        {/* <Sign/> */}
    </>
  )
}

export default App