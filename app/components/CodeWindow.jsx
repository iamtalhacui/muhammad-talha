// components/CodeWindow.jsx
import React from 'react';

const CodeWindow = ({ title = "developer.js", className = "" }) => {
  return (
    <div className={`transition-all duration-200 ease-in-out hover:cursor-pointer hover:scale-105 hover:-rotate-3 bg-gray-800 rounded-lg hover:shadow-2xl overflow-hidden max-w-lg max-h-lg ${className}`}>
      
      <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
        
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <div className="text-gray-300 text-sm font-medium">{title}</div>
        <div className="w-16"></div> 
      </div>

      <div className="p-4 font-mono text-sm">
        
        <div className="text-gray-400 mb-2">// Software Engineer</div>
        
        
        <div className="text-white">
          <span className="text-pink-400">const</span>{' '}
          <span className="text-blue-400">developer</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-yellow-400">{'{'}</span>
        </div>
        
        <div className="ml-4 mt-1">
          <div className="text-white">
            <span className="text-green-400">name</span>
            <span className="text-white">:</span>{' '}
            <span className="text-orange-400">'Muhammad Talha'</span>
            <span className="text-white">,</span>
          </div>
          
          <div className="text-white mt-1">
            <span className="text-green-400">skills</span>
            <span className="text-white">:</span>{' '}
            <span className="text-white">[</span>
            <span className="text-orange-400">'React'</span>
            <span className="text-white">,</span>{' '}
            <span className="text-orange-400">'TailwindCSS'</span>
            <span className="text-white">,</span>{' '}
            <span className="text-orange-400">'Next.js'</span>
            <span className="text-white">],</span>
          </div>
          
          <div className="text-white mt-1">
            <span className="text-green-400">focuses</span>
            <span className="text-white">:</span>{' '}
            <span className="text-white">[</span>
            <span className="text-orange-400">'Full-Stack Dev'</span>
            <span className="text-white">,</span>{' '}
            <span className="text-orange-400">'UI/UX'</span>
            <span className="text-white">],</span>
          </div>
          
          <div className="text-white mt-1">
            <span className="text-green-400">learning</span>
            <span className="text-white">:</span>{' '}
            <span className="text-white">[</span>
            <span className="text-orange-400">'Full-Stack'</span>
            <span className="text-white">,</span>{' '}
            <span className="text-orange-400">'Web Performance'</span>
            <span className="text-white">],</span>
          </div>
        </div>
        
        <div className="text-yellow-400 mt-1">{'};'}</div>
      </div>
    </div>
  );
};

export default CodeWindow;