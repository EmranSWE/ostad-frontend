import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import careerGuidImg from '../../../Assets/Course.png';
import play from '../../../Assets/play-circle-line.png';
import instructorPic from '../../../Assets/Rectangle 186.png';
import book from '../../../Assets/image 17.png';
const SliderSection = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div style={{backgroundColor:'rgba(16, 24, 40, 1)'}} >
            <div className='mx-12'>
            <div className='flex items-center py-4'><img src={book} alt="" /><h1 className='text-2xl text-white'>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</h1></div>
            <Carousel responsive={responsive} className='py-10'>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={careerGuidImg} alt="Shoes" /></figure>
                        <div style={{ backgroundColor: 'rgba(29, 41, 57, 1)' }} className="card-body">
                            <div className='flex'><img className='text-white' src={play} alt="" /><h2 className="card-title text-white">ক্যারিয়ার করুন ওয়েব ডিজাইনে</h2></div>

                            <div className="card-actions justify-start">
                                <div className='flex text-white'>
                                    <img src={instructorPic} alt="" />
                                    <div className='mx-4'>
                                        <p>Instructor name</p>
                                        <p>Expertise field name</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={careerGuidImg} alt="Shoes" /></figure>
                        <div style={{ backgroundColor: 'rgba(29, 41, 57, 1)' }} className="card-body">
                            <div className='flex'><img className='text-white' src={play} alt="" /><h2 className="card-title text-white">ক্যারিয়ার করুন ওয়েব ডিজাইনে</h2></div>

                            <div className="card-actions justify-start">
                                <div className='flex text-white'>
                                    <img src={instructorPic} alt="" />
                                    <div className='mx-4'>
                                        <p>Instructor name</p>
                                        <p>Expertise field name</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></div>
                <div> <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={careerGuidImg} alt="Shoes" /></figure>
                        <div style={{ backgroundColor: 'rgba(29, 41, 57, 1)' }} className="card-body">
                            <div className='flex'><img className='text-white' src={play} alt="" /><h2 className="card-title text-white">ক্যারিয়ার করুন ওয়েব ডিজাইনে</h2></div>

                            <div className="card-actions justify-start">
                                <div className='flex text-white'>
                                    <img src={instructorPic} alt="" />
                                    <div className='mx-4'>
                                        <p>Instructor name</p>
                                        <p>Expertise field name</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></div>
                <div> <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={careerGuidImg} alt="Shoes" /></figure>
                        <div style={{ backgroundColor: 'rgba(29, 41, 57, 1)' }} className="card-body">
                            <div className='flex'><img className='text-white' src={play} alt="" /><h2 className="card-title text-white">ক্যারিয়ার করুন ওয়েব ডিজাইনে</h2></div>

                            <div className="card-actions justify-start">
                                <div className='flex text-white'>
                                    <img src={instructorPic} alt="" />
                                    <div className='mx-4'>
                                        <p>Instructor name</p>
                                        <p>Expertise field name</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div> <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={careerGuidImg} alt="Shoes" /></figure>
                        <div style={{ backgroundColor: 'rgba(29, 41, 57, 1)' }} className="card-body">
                            <div className='flex'><img className='text-white' src={play} alt="" /><h2 className="card-title text-white">ক্যারিয়ার করুন ওয়েব ডিজাইনে</h2></div>

                            <div className="card-actions justify-start">
                                <div className='flex text-white'>
                                    <img src={instructorPic} alt="" />
                                    <div className='mx-4'>
                                        <p>Instructor name</p>
                                        <p>Expertise field name</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </Carousel>
            </div>
        </div>

    );

};

export default SliderSection;