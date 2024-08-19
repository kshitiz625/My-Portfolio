import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Training Internship - Marketing',
      company: 'HighRadius',
      date: 'June 2024',
      description: 'Gained experience in marketing strategies, teamwork, and professional communication in a corporate environment.',
    },
  ];

  return (
    <div id="experience" className='flex flex-col justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-slate-300 py-16 px-8 md:px-24'>
      <h2 className='text-4xl font-bold text-yellow-400 mb-8'>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className='mb-8 p-4 rounded-lg shadow-lg bg-gray-900'>
          <h3 className='text-2xl font-semibold text-white'>{exp.title}</h3>
          <p className='text-lg text-yellow-400'>{exp.company} | {exp.date}</p>
          <p className='mt-4 text-slate-300'>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
