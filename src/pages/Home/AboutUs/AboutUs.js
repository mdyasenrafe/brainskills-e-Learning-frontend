import "./AboutUs.css"
import { Link } from 'react-router-dom';
import aboutImg from '../../../images/about-img-2.jpg';
import Particles from 'react-tsparticles';
import { Swiper, SwiperSlide } from "swiper/react";

// img
import img1 from "../../../images/f.jpg";
import img2 from "../../../images/ba.jpg";
import img3 from "../../../images/yu.jpg";
import img4 from "../../../images/s.jpg";
import img5 from "../../../images/y.png";
import img6 from "../../../images/education.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

const AboutUs = () => {
    const instructors = [
        {
            img: img1,
            name: "Fateh Ahmod",
            profetion: "Web Developer"
        },
        {
            img: img2,
            name: "Bappy Das",
            profetion: "Web Developer"
        },
        {
            img: img3,
            name: "Md Yousuf Sheikh",
            profetion: "Web Developer"
        },
        {
            img: img4,
            name: "Shahriar Rahman Heezol",
            profetion: "Web Developer"
        },
        {
            img: img5,
            name: "Md Yeasen",
            profetion: "Web Developer"
        },
        {
            img: img6,
            name: "Musa Sazib",
            profetion: "Web Developer"
        }
    ]

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const options = {
        background: {
            color: {
                value: "#fff"
            }
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        interactivity: {
            detectsOn: "window"
        },
        emitters: {
            position: {
                x: 100,
                y: 100
            },
            rate: {
                quantity: 15,
                delay: 0.25
            }
        },
        particles: {
            color: {
                value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
            },
            move: {
                decay: 0.05,
                direction: "top",
                enable: true,
                gravity: {
                    enable: true,
                    maxSpeed: 150
                },
                outModes: {
                    top: "none",
                    default: "destroy"
                },
                speed: { min: 15, max: 50 }
            },
            number: {
                value: 0
            },
            opacity: {
                value: 1
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                direction: "random",
                animation: {
                    enable: true,
                    speed: 30
                }
            },
            tilt: {
                direction: "random",
                enable: true,
                value: {
                    min: 0,
                    max: 360
                },
                animation: {
                    enable: true,
                    speed: 30
                }
            },
            size: {
                value: 8
            },
            roll: {
                darken: {
                    enable: true,
                    value: 25
                },
                enable: true,
                speed: {
                    min: 5,
                    max: 15
                }
            },
            wobble: {
                distance: 30,
                enable: true,
                speed: {
                    min: -7,
                    max: 7
                }
            },
            shape: {
                type: [
                    "circle",
                    "square",
                    "polygon",
                    "rectangle",

                ],
                options: {
                    polygon: [
                        {
                            sides: 5
                        },
                        {
                            sides: 6
                        }
                    ],

                }
            }
        }
    }
    return (

        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className='flex items-center justify-center  h-60 mb-5 aboutImage' >
                <div className=''>
                    <h1 className='text-3xl text-white font-extrabold'>About us</h1>
                    <Link className='text-white' to="/">Home</Link>/<Link className='text-white' to="/">About us</Link>
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
            <div>
                <h1 className='flex justify-center text-2xl font-bold'>Our team members</h1>
                <div className="Instructor">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,

                            },
                            "@1.50": {
                                slidesPerView: 2,

                            },
                            "@1.75": {
                                slidesPerView: 3,

                            }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            instructors?.map(data => <SwiperSlide className="py-10">
                                <div className="text-center bg-gray-50 p-3 rounded-md shadow-md">
                                    <img className="h-48 w-48 rounded-lg mx-auto" src={data.img} alt="" srcset="" />
                                    <h1 className="text-lg  font-semibold">{data.name}</h1>
                                    <h1>{data.profetion}</h1>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;