import React from 'react';

const Category = () => {
    const category = [
        {
            logo: "https://i.ibb.co/jR0dRjh/png-transparent-digital-marketing-social-media-marketing-business-marketing-service-balloon-social-m.png",
            name: "Marketing & sales",
            jobs_available: 760
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPvkHzHvEfshoeGgJUdpMnuhnhfH2SbxaYkN87ynQ&sg",
            name: "Finance",
            jobs_available: 70
        },
        {
            logo: "https://i.ibb.co/1sggmDP/pngwing-com.png",
            name: "Programming",
            jobs_available: 350
        },
        {
            logo: "https://w7.pngwing.com/pngs/394/296/png-transparent-3d-computer-graphics-3d-modeling-animation-animation-purple-3d-computer-graphics-text-thumbnail.png",
            name: "3D Animation",
            jobs_available: 35
        }
    ];
    

    return (
        <section className='max-w-7xl mx-auto py-14'>
            <div className='mb-7 space-y-4 text-center'>
                <h2 className='font-bold text-5xl'>Job Category List</h2>
                <p className='text-slate-700 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 md:mx-10 xl:mx-0 gap-4'>
                {
                    category.map((ct, ind) => {
                        return <div key={ind} className='rounded-lg py-12 px-5 shadow-inner bg-slate-100 text-center space-y-4'>
                            <img className='h-32 w-32 mx-auto' src={ct.logo} alt="" />
                            <h2 className='font-bold text-2xl'>{ct.name}</h2>
                            <p className='font-semibold text-slate-700'>{ct.jobs_available} jobs available</p>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Category;