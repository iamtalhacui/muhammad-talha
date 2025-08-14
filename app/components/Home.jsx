"use client";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import CodeWindow from "./CodeWindow";

const Section = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col lg:flex-row mt-20">
      <div className="flex flex-col px-5 md:px-20 lg:pl-40 pt-20 md:pt-32 lg:pt-40 gap-2 lg:w-170">
        <span className="text-base md:text-lg font-semibold text-[hsl(var(--foreground))] ">Hello I am </span>
        <h1 className="text-3xl md:text-5xl  text-[hsl(var(--foreground))] font-extrabold">
            Muhammad <span className=" text-[hsl(var(--primary))]">Talha</span>
        </h1>
        <span className=" text-[hsl(var(--foreground))] text-lg md:text-xl lg:text-2xl mt-2">A Frontend Developer & Passionate Software Engineering Student </span>
         <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button className="py-2  transition-all duration-400 cursor-pointer ease-in-out hover:scale-104 bg-[hsl(var(--primary))] text-[hsl(var(--background))] rounded-lg   px-2 font-bold hover:bg-[hsl(var(--primary-hover))]">Contact Me</button>
            <button className="transition-all duration-400 cursor-pointer ease-in-out hover:scale-104 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] rounded-lg   px-2 border-1 border-[hsl(var(--foreground))] font-bold">View Projects</button>
            <div className="flex gap-3 justify-center sm:justify-start sm:ml-10">
             < FaGithub   onClick={() => openLink("https://github.com/iamtalhacui")}
             size={30} className="mt-1 text-blue-400  hover:text-[hsl(var(--primary))] transition-all duration-300 cursor-pointer ease-in-out hover:rotate-10 hover:scale-110"/>
              <FaLinkedin  onClick={() => openLink("https://www.linkedin.com/in/muhammad-talha-86662733b/")}
               size={30} className="mt-1 text-blue-400  hover:text-[hsl(var(--primary))] transition-all duration-300 cursor-pointer ease-in-out hover:rotate-10 hover:scale-110"/>
              <CiMail onClick={() => window.location.href = "mailto:muhammadtalha123445@gmail.com"}
              size={30} className="mt-1 text-blue-400  hover:text-[hsl(var(--primary))] transition-all duration-300 cursor-pointer ease-in-out hover:rotate-10 hover:scale-110"/>
            </div>
         </div>
      </div>
     
      <div className="pt-10 lg:pt-40 px-5 md:px-20 lg:pl-20">
          <CodeWindow/>
      </div>
    </div>
  )
}

export default Section