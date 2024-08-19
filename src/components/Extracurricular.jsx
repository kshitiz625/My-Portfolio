import React from 'react';

const ExtraCurricular = () => {
  return (
    <div id="extra-curricular" className='bg-gradient-to-b from-gray-800 to-black text-slate-300 py-16 px-8 md:px-24 h-screen flex flex-col justify-center'>
      <h2 className='text-4xl font-bold text-yellow-400 mb-8'>Extra-Curricular Activities</h2>
      <div className='p-6 bg-gray-900 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-semibold text-white'>Competitive Basketball Player</h3>
        <p className='mt-4 text-slate-300'>Participated in intercollegiate tournaments, focusing on teamwork and competition.</p>
      </div>
    </div>
  );
}

export default ExtraCurricular;
