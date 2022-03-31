import React from 'react';
import aboutImg from "../images/about-img-2.jpg"


const AboutUs = () => {
    return (
        <div>
            <div className='flex items-center justify-center bg-zinc-300 h-60 mb-5' >
                <div className=''>
                    <h1 className='text-3xl font-extrabold'>About us</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-2 xs:grid-cols-1 p-3'>

                <div className='mr-5 flex items-center justify-center drop-shadow-2xl'>
                    <img className='mt-24 md:mt-0 h-96 max-w-full ' src={aboutImg} alt="" srcset="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>We Share Knowledge Among The World</h1>
                    <p className='text-1xl mb-5'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Donec quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. DonecImage Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa. Quisque velit nisi, pretium ut lacinia in elementum id enim non nulla sit amet nisl tempus convallis quis ac lectus proin eget.</p>
                    <h1 className='text-2xl font-bold'>Lance Altman</h1>
                    <p>Founmder, CEO</p>
                </div>

            </div>

            {/* why our cours */}


            <div className='grid md:grid-cols-3 xs:grid-cols-1 mt-16 p-3'>
                <div>
                    <h1 className='flex justify-center text-2xl font-bold'>Who we are?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consequatur quia aperiam aliquid est magnam et a, debitis laborum, sed incidunt aliquam magni? Sint dolorem eum deserunt, maxime laudantium recusandae pariatur debitis quis, error eos eveniet id illo temporibus velit quam facere libero atque tempore perspiciatis quibusdam reiciendis, molestiae odio!</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-2xl font-bold'>Why choose us?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consequatur quia aperiam aliquid est magnam et a, debitis laborum, sed incidunt aliquam magni? Sint dolorem eum deserunt, maxime laudantium recusandae pariatur debitis quis, error eos eveniet id illo temporibus velit quam facere libero atque tempore perspiciatis quibusdam reiciendis, molestiae odio!</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-2xl font-bold'>What we do?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consequatur quia aperiam aliquid est magnam et a, debitis laborum, sed incidunt aliquam magni? Sint dolorem eum deserunt, maxime laudantium recusandae pariatur debitis quis, error eos eveniet id illo temporibus velit quam facere libero atque tempore perspiciatis quibusdam reiciendis, molestiae odio!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;