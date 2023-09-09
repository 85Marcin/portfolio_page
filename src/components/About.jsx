const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#ecf0f3] text-[#1f2937] tracking-wide"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full gap-8 px-4 mx-auto sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl">
          <div className="pb-10 pl-4 sm:text-left">
            <p className="inline text-4xl font-bold font text-[#5651e5] border-b-4 border-[#bfd0e6] sm:ml-10">
              About
            </p>
          </div>
          <div className="max-w-[1400px]  grid sm:grid-cols-2 gap-8 px-4">
            <div className="text-3xl  sm:text-right">
              <p>I'm Marcin, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className="">
                I'm a dedicated junior software developer with an unwavering
                passion for the world of software. My enthusiasm lies in
                continually embracing new technologies. I'm driven by the
                excitement of learning and the constant pursuit of improvement
                while seeking opportunities to expand my knowledge and skillset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
