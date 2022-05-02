import React from 'react';


const data = [
    {
        name: "Javascript",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "React",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "NodeJs",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "Python",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "Larval",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "Django",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "C++",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
    {
        name: "Flatter",
        dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur."
    },
];
const Resources = () => {
    return (
        <div>
            {/* resources banner  */}
            <div className='px-8 py-32 text-white' style={{ backgroundImage: "url(https://cmitsolutions.com/wall-street-grand-central/wp-content/uploads/sites/18/2017/07/Shaking_Hands.jpg)", backgroundRepeat: "no-repeat", width: "100%", backgroundSize: "cover" }}>
                <h2 className='text-7xl text-center'>Technology Resources</h2>
                <p className='text-base text-center'>Browse our library of helpful resources designed to keep your employees productive, your systems up and running, and your business secure from the latest cybersecurity threats.</p>
            </div>
            {/* blog category  */}
            <div className="p-20">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center px-4  py-2 shadow-md hover:shadow-none rounded-lg ease-in-out duration-300">
                        <div className="ml-6">
                            <h1 className="title font-extrabold text-xl">
                                Javascript
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;