
import Home from "./components/Home";
import About from './about/page.jsx'
import Skills from './skills/page.jsx'
import Projects from './projects/page.jsx'
import Contact from './contact/page.jsx'
export default function Page() {
  return (
   <>
   <div className="min-h-[90vh] max-h-screen bg-[hsl(var(--background))] ">
      <Home/>
   </div>
   <div>
    <About/>
   </div>
    <div>
      <Skills/>
    </div>
    <div>
      <Projects/>
    </div>
     <div>
      <Contact/>
    </div>
   </>
  );
}
