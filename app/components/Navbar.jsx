"use client"
import Link from "next/link"
import { MdInvertColors, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm shadow-sm py-3 px-2">
        <Link href='/' className="text-xl cursor-pointer text-[hsl(var(--primary))] pl-5 font-extrabold">MT</Link>
        

        <div className="hidden md:flex gap-10 text-sm font-semibold pr-10">
             <Link href='/' className="mt-2 transition-colors duration-300 ease-in-out text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] ">Home</Link>
             <Link href='#about' scroll={true} className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">About</Link>
             <Link href='#skills' className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] ">Skills</Link>
             <Link href='#projects' className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">Projects</Link>
             <Link href='#contact' className="mt-2 transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]">Contact</Link>
             <MdInvertColors size={20} className="transition-colors duration-300 mt-2 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] rounded-full"/>
            <button className="transition-all duration-400 cursor-pointer ease-in-out  bg-[hsl(var(--primary))] text-[hsl(var(--background))] rounded-lg py-2  px-2 hover:scale-102 hover:bg-[hsl(var(--primary-hover))]">Resume</button>
        </div>

        
        <div className="md:hidden flex items-center gap-4 pr-5">
            <MdInvertColors size={20} className="transition-colors duration-300 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--background))] rounded-full"/>
            <button onClick={toggleMenu} className="text-[hsl(var(--primary))]">
                {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
        </div>


       {isMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-[hsl(var(--background))]/95 backdrop-blur-2xl shadow-xl border-t border-[hsl(var(--primary))]/20 md:hidden  z-50">
    <div className="flex flex-col gap-3 p-5 text-sm  items-center justify-center font-extrabold">
      <Link href='/' onClick={toggleMenu} className="transition-colors duration-300 ease-in-out text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] py-2 px-3 rounded-md hover:bg-[hsl(var(--primary))]/10">Home</Link>
      <Link href='#about' scroll={true} onClick={toggleMenu} className="transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] py-2 px-3 rounded-md hover:bg-[hsl(var(--primary))]/10">About</Link>
      <Link href='#skills' onClick={toggleMenu} className="transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] py-2 px-3 rounded-md hover:bg-[hsl(var(--primary))]/10">Skills</Link>
      <Link href='#projects' onClick={toggleMenu} className="transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] py-2 px-3 rounded-md hover:bg-[hsl(var(--primary))]/10">Projects</Link>
      <Link href='#contact' onClick={toggleMenu} className="transition-colors duration-300 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] py-2 px-3 rounded-md hover:bg-[hsl(var(--primary))]/10">Contact</Link>
      <button onClick={toggleMenu} className="transition-all duration-400 cursor-pointer ease-in-out bg-[hsl(var(--primary))] text-[hsl(var(--background))] rounded-lg py-2 px-2 hover:scale-102 hover:bg-[hsl(var(--primary-hover))] w-70  mt-2">Resume</button>
    </div>
  </div>
)}

    </div>
  )
}

export default Navbar