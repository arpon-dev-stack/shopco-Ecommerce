import Navbar from "../Navbars/Navbar"
import Footer from "../Footer/Footer"

function Layout({ children }) {
  console.dir()
  return (
    // <div className="w-full min-w-52">
    // <Navbar/>
    // <Footer/>
    // </div>
    <div className='w-full h-auto bg-white'>

      <Navbar />

      <div className='max-w-[1500px] min-w-[240px] mx-auto  bg-red-400'>

        {children}
        <Footer/>
      </div>

    </div>

  )
}

export default Layout