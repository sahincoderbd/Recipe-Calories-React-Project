import './App.css'
import Header from './Components/header'
import Hero from './Components/hero'
import Recipes from './Components/recipes'
import Sidebar from './Components/sidebar'

function App() {


  return (
    <>
  <Header></Header>
  <Hero></Hero>
  {/* Our recipes section */}
  <div className='my-14 px-2 flex flex-col flex-nowrap justify-center gap-3 items-center max-w-full lg:max-w-3/5 mx-auto'>
    <h2 className='text-2xl lg:text-4xl font-bold text-secondary dark:text-primary'>Our Recipes</h2>
    <p className='text-center text-base font-normal'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra 
      rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
  </div>
  <div className='flex flex-col lg:flex-row justify-between px-3 my-14 lg:gap-5 gap-3 container mx-auto'>
  <Recipes></Recipes>
  <Sidebar></Sidebar>

  </div>
      
    </>
  )
}

export default App
