const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#ecf0f3] text-[#1f2937] tracking-wide"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full gap-8 px-4 mx-auto sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl">
          <div className="pb-10 pl-4 sm:text-left">
            <p className="inline text-4xl font-bold  text-[#5651e5] border-b-4 border-[#ebdb65] sm:ml-10">
              About
            </p>
          </div>
          <div className="max-w-[1400px]  grid sm:grid-cols-2 gap-8 px-4">
            <div className="text-4xl  sm:text-right">
              <p>I'm Marcin, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className="">
                Irure esse esse tempor quis veniam irure eu culpa eiusmod. Culpa
                et sint sint eu exercitation esse ad incididunt Lorem fugiat
                occaecat consectetur dolore proident. Eiusmod ex irure cupidatat
                dolore pariatur sint enim proident excepteur in nostrud. Velit
                laboris ipsum anim deserunt. Sint nulla excepteur duis irure
                exercitation eu. Occaecat minim nostrud anim ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
