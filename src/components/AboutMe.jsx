import React from 'react'
import profile from '../assets/rose.png';

const About = () => {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen w-full px-4 md:flex-row'>
      <div>
        <img src={profile} alt="my profile" className='h-full w-full object-cover' />
      </div>

      <div className='flex flex-col justify-center h-full ml-4 font-serif'>
        <h3 className='font-bold text-3xl mt-5 text-center'>About Me</h3>
        <p className='py-4 max-w-md text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat illo reiciendis nemo, 
            est id ad, quo repellendus aperiam odit ullam voluptas atque provident officiis suscipit dicta 
            numquam nesciunt cum laudantium assumenda minus ex, eum sint harum? Cum, laboriosam natus dignissimos 
            magnam eveniet quis quod inventore explicabo tempora? Omnis maxime provident sint id aperiam possimus 
            quas harum perspiciatis? Necessitatibus, cumque repudiandae! Reprehenderit sapiente soluta quam culpa 
            quis blanditiis amet molestiae veritatis, optio inventore tempora harum eius perferendis? Nemo iusto id 
            quis exercitationem illo rerum. Natus adipisci suscipit molestiae explicabo iste veniam deserunt corrupti 
            ipsum maxime. Libero officia autem labore aut?
        </p>
        <a href="#" className="block mx-auto text-center font-serif text-white bg-black bg-opacity-50 py-3 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" style={{ width: '200px' }}>
            Hire Me
        </a>
      </div>  
    </div>
  )
};

export default About
