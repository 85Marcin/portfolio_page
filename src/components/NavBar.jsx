import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

function NavBar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ecf0f3] text-[#1f2937] tracking-wide shadow">
      <div className="hidden md:flex ml-auto">
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden ml-auto z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-[#ecf0f3] flex flex-col justify-center items-center text-4xl`
        }
      >
        <li className="py-6">Home</li>
        <li className="py-6">About</li>
        <li className="py-6">Skills</li>
        <li className="py-6">Projects</li>
        <li className="py-6">Contact</li>
      </ul>
      {/* social icons */}
      <div></div>
    </div>
  )
}

export default NavBar
