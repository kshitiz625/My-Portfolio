import React from 'react';

const Certifications = () => {
  const certifications = [
    'KIIT University International Scholarship Programme (KUISP)',
    'Participant of Hacktoberfest organized by GitHub – 2022',
    'Participated as Delegate in the YOUTH-20 Consultation organized by KIIT Deemed to be University',
  ];

  return (
    <div id="certifications" className='flex flex-col justify-center h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16 px-8 md:px-24'>
      <h2 className='text-4xl font-bold text-yellow-400 mb-8'>Certifications</h2>
      <ul className='space-y-6'>
        {certifications.map((cert, index) => (
          <li key={index} className='bg-gray-900 p-4 rounded-lg shadow-lg'>
            <p className='text-lg text-slate-300'>{cert}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
