
const About = () => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl bolder mt-5">Sobre o Mini Blog</h1>
        <p className="mt-5 text-gray-400">Este projeto consiste em um blog feito com NEXTjs no Front-End e Firebase no Back-End.</p>
        <button className="w-[120px] mx-auto bg-[#1a8918] text-white cursor-pointer rounded-xl font-bold outline-none font-base px-2 py-2 hover:bg-[#0f730c]">Criar post</button>
    </div>
  )
}

export default About