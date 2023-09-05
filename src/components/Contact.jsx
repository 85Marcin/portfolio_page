function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ecf0f3] flex justify-center p-4"
    >
      <form
        action="https://getform.io/f/9f86d99d-638d-4224-b22d-5beba051cb14"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-4">
            Submit the form below or send me an email - marcinegzmont@gmail.com
          </p>
        </div>
        <input placeholder="name" name="name" className="p-2"></input>
        <input placeholder="email" name="email" className="my-4 p-2"></input>
        <textarea
          placeholder="message"
          name="message"
          rows="10"
          className="p-2"
        ></textarea>
        <button className="border-2 mx-auto px-2 mt-3 ">Submit</button>
      </form>
    </div>
  )
}

export default Contact
