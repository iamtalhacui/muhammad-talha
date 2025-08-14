import React from 'react'
import { ProjectCard } from '../components/ProjectCard';
const page = () => {
    const projects = [
    {
      title: "E-Tour Website",
      description: "A front-end  projct with modern UI/UX, different places to visit , and hotels . Built with React and tailwind for optimal performance and beautifull UI.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "TailwindCSS",],
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      date: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with beautiful visualizations, forecasts, and location-based weather data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "API"],
      date: "2023"
    },
  ];
  return (
    <div id='projects' className='h-screen w-full pt-20'>
          <h1 className='mt-5 text-2xl md:text-3xl lg:text-4xl font-bold px-5 md:px-10 lg:pl-30 text-[hsl(var(--foreground))] '>Projects</h1>
         <div className='mx-5 md:mx-10 lg:ml-30 rounded-full h-2 w-16 mt-2  bg-[hsl(var(--primary))]'></div>
    
        <div className='mt-10  flex md:flex-row flex-col md:space-x-4 justify-center  space-y-5 flex-wrap'>
             {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </div>
  )
}

export default page