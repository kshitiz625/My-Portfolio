import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', items: ['C', 'C++', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Frontend Technologies', items: ['React.js'] },
    { category: 'Backend Technologies', items: ['Node.js', 'Express.js'] },
    { category: 'Database Management', items: ['SQL'] },
    { category: 'Tools', items: ['Git', 'AWS'] },
  ];

  return (
    <div id="skills" className='bg-gradient-to-b from-black to-gray-800 text-white py-16 px-8 md:px-24'>
      <h2 className='text-4xl font-bold text-yellow-400 mb-8'>Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {skills.map((skill, index) => (
          <div key={index} className='bg-gray-900 p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-yellow-400 mb-4'>{skill.category}</h3>
            <ul className='list-disc list-inside'>
              {skill.items.map((item, idx) => (
                <li key={idx} className='text-lg text-slate-300'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
