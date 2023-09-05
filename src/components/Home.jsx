import { HiArrowNarrowRight } from "react-icons/hi"

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#ecf0f3]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#274166]">
          Marcin
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#34588a]">
          I'm a software developer
        </h2>
        <p className="py-4 max-w-[700px]">
          loerem dasndjsaknkjvc dsalkn klndjs clks las h sjhkbc bjdhsa chsaj
          chjdsa cjk
          saclkdsnacldsnfjkhdsafhdsahfjhdsaklfhkdsahfjkldsahfjksdhjkflhdsjkfhsdkhfkjds
        </p>
        <div>
          <button className="group border-2 border-[#cfd2d6] p-2 my-2 flex items-center bg-[#bfd0e6] hover:bg-[#e5e8eb] hover:border-[#bfd0e6] duration-200">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
