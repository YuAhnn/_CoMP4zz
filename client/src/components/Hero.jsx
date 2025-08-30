import { Link } from 'react-router-dom'

const Hero = () => {
  return (
     <header className="flex flex-col items-center justify-center max-w-[800px] w-full h-screen mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold md:py-2">Compass</h1>
        <p className="text-md sm:text-xm md:text-xl  text-center">Pause. Feel. Understand.</p>
       <div className='flex justify-center items-center'>
         <Link to="/preview" className="border-1 text-center w-[10rem] p-2">Get Started</Link>
       </div>
      </div>
      {/* <figure className="">
        <img src="/assets/hero-image.png" alt="Illustration of the main feature" />
      </figure> */}
    </header>
  )
}

export default Hero