import React from 'react';

const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white p-16 md:flex md:py-40 md:px-24 lg:p-36 gap-32">
      <div className='w-full md:w-2/3 lg:w-2/3'>
        <h4 className='text-3xl '>Hello,</h4>
        <h1 className='text-6xl font-bold my-2'>I'm <span className='text-yellow-400'>Kshitiz Mahato</span></h1>
        <h4 className='text-4xl font-semibold'>Aspiring Intern</h4>
        <p className='text-slate-300 my-3'>
          I am a highly motivated and enthusiastic individual seeking an internship opportunity to apply my skills and knowledge to real-world projects. I am passionate about learning, growing my skills, and making a positive impact.
        </p>
      </div>
    </div>
  );
};

export default Home;
