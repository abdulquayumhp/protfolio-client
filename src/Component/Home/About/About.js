import React from 'react';

const About = () => {
    return (
        <div className="h-full lg:w-9/12 w-11/12 mx-auto flex items-center flex-col lg:flex-row gap-5 md:gap-36 py-10">
            <div className=' lg:bg-gray-300  rounded-full border-8 border-orange-400'>
                <img className=' rotate-1 mx-auto' src="https://i.ibb.co/zxrJbXj/selt-image-rounded-3.png" alt="" />
            </div>
            <div className='w-full lg:w-[600px] '>
                <h1 className='text-2xl py-3'>About</h1>
                <div className='flex items-center  flex-col md:flex-row'>
                    <div className=''>
                        <p className='lg:w-[300px]'>Hello! i'm md abdul quayum, as a web designer and developer from Dhaka, bangladesh, i have rich experience in design & development, i love to talk with you about our unique.</p>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-between py-2'>
                            <p className='bg-orange-300 py-1 px-2 rounded-md'>age: </p>
                            <p className=' font-semibold'>24</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-2'>
                            <p className='bg-orange-300 py-1 px-2 rounded-md'>Design: </p>
                            <p className=' font-semibold'>70+ Project</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-2'>
                            <p className='bg-orange-300 py-1 px-2 rounded-md '>Development </p>
                            <p className='pl-5 font-semibold'>50+ project</p>
                        </div>
                        <hr />

                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='text-2xl font-semibold'>LOOK WHAT I CAN DO</h1>
                    <div className='flex items-center gap-5 flex-wrap'>
                        <div className='py-2'>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>DESIGN</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>HTML CSS</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>JAVASCRIPT</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>REACT JS</p>
                            </div>


                        </div>
                        <div></div>
                        <div className='py-2'>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>REDUX</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>NODE JS</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>EXPRESS JS</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>NEXT JS</p>
                            </div>


                        </div>
                        <div></div>
                        <div className='py-2'>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>TYPESCRIPT</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>MONDODB</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>MONGOSS</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <p className='text-orange-300 text-2xl'>+</p>
                                <p className='md:text-left text-center font-medium'>WORDPRESS</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;