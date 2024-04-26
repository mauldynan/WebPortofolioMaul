import React from 'react';

const Home = () => {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center text-center w-full'>
      <p className='text-base font-serif mb-5'>Hello👋 My name is Maulidya Isnaini, and I'm</p>
      <p className=' font-bold font-serif text-7xl text-yellow-300 mb-5'>GERDA SOWULO</p>
      <p className='text-base font-serif mb-2'>As Front End Developer</p>
      <a href="#" className="text-base font-serif text-white bg-black bg-opacity-50 py-3 px-12 rounded-full 
            hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
        Contact Me
      </a>
    </div>
  );
};

export default Home;
