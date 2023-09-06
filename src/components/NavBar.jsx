import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"
import { useState } from "react"

function NavBar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ecf0f3] text-[#1f2937] tracking-wide shadow-md">
      <div className="hidden md:flex ml-auto text-xl">
        <ul className="flex">
          <li>
            <Link to="home" smooth={true} duartion={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duartion={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duartion={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duartion={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duartion={500}>
              Contact
            </Link>
          </li>
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
        <li className="py-6">
          <Link onClick={handleClick} to="home" smooth={true} duartion={500}>
            Home
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="about" smooth={true} duartion={500}>
            About
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="skills" smooth={true} duartion={500}>
            Skills
          </Link>
        </li>
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duartion={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="contact" smooth={true} duartion={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden md:flex fixed  flex-col top-[35%] left-0 font-bold">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex items-center justify-between w-full p-2 bg-blue-400 text-grey-300"
              href="/"
            >
              LinkedIn
              <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex items-center justify-between w-full p-2 bg-[#333333] text-grey-300"
              href="/"
              style={{ backgroundColor: "gray" }}
            >
              Github
              <FaGithub style={{ color: "white" }} size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex items-center justify-between w-full p-2 bg-red-400 text-grey-300"
              href="mailto:marcinegzmont@gmail.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex items-center justify-between w-full p-2 bg-gray-300 
              "
              href="/Marcin-Egzmont.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="my-cv.pdf"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
