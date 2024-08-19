import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Developed a personal portfolio website showcasing projects, skills, and experiences using React.',
    },
    {
      title: 'Waste Classification',
      description: 'Created a garbage classification project using TensorFlow to categorize waste materials accurately.',
    },
  ];

  return (
    <div id="projects" className='flex flex-col justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-slate-300 py-16 px-8 md:px-24'>
      <h2 className='text-4xl font-bold text-yellow-400 mb-8'>Projects</h2>
      <div className='space-y-8'>
        {projects.map((project, index) => (
          <div key={index} className='p-6 bg-gray-900 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>
            <p className='mt-4 text-slate-300'>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
