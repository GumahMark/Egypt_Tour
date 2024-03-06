import { HiArrowLongRight } from "react-icons/hi2";

export default function Partners() {
  return (
    <div className="pb-[5%] relative bg-[#cca479]">
        <img src="/src/assets/bg.jpg" alt="" className="absolute h-full w-full opacity-10"/>
        <div className="relative z-10">
            <p className="text-center text-sm pb-4">THANK YOU</p>
            <h1 className="lg:text-3xl text-white font-poppins text-center">
                To our sponsors and <br /> Event 
                <span className="text-black"> Partners </span>
            </h1>
            <div className="py-[5%] flex flex-wrap items-center justify-center gap-x-8">
                <img src="/src/assets/National-Geographic-logo.png" alt="National Geographic" className="lg:w-52 w-40 lg:h-52 object-contain"/>
                <img src="/src/assets/pyramid international 1.webp" alt="Pyramid International" className="lg:w-52 w-40 lg:h-52 object-contain"/>
                <img src="/src/assets/bbc.jpg" alt="BBC" className="lg:w-52 w-40 lg:h-52 object-contain"/>
                <img src="/src/assets/Lonely-Planet.png" alt="Lonely-Planet" className="lg:w-52 w-40 lg:h-52 object-contain"/>
            </div>
            <div className="flex justify-center pb-[5%]">
                <button className="border border-solid border-black flex items-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">
                    BOOK NOW <HiArrowLongRight />
                </button>
            </div>
        </div>
    </div>
  )
}
