import React from 'react'
import { MdOutlineWeb } from "react-icons/md";

const Projects = () => {
    return (
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center md:h-screen w-full'>
            <h3 className='font-bold text-3xl mt-5 text-center'>Portofolio</h3>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
                <div className='shadow-md shadow-slate-600 rounded-lg font-serif p-8'>
                    <div className='flex justify-between'>
                        <div className='w-1/4 mb-3'><MdOutlineWeb /></div>
                        <div className='w-3/4'>
                            <h4 className='font-bold'>Web Development</h4>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident vel quas repellendus harum blanditiis voluptate! 
                        Libero qui temporibus exercitationem iste?
                    </p>
                </div>
            </div>

        </div>
    )
};

export default Projects