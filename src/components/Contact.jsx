import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ecf0f3] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9f86d99d-638d-4224-b22d-5beba051cb14"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ebdb65] text-[#5651e5]">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ffffff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-2 border-[#cfd2d6] p-2 my-3 flex items-center bg-[#bfd0e6]   hover:bg-[#e5e8eb] hover:border-[#bfd0e6] duration-200 mx-auto   ">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
