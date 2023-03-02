import React from 'react';
import banner from '../../Assets/banner.png';
import liveCourse from '../../Assets/book-3-line.png';
import team from '../../Assets/team-line.png';
import arrow from '../../Assets/Group.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Be the first with us</h1>
                        <p className="py-6">স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন <br /> দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                       <div className='flex'>
                       <p><div className='flex font-bold mx-4'><img className='w-5 h-5' src={liveCourse} alt="" /> <span>৭টি লাইভ কোর্স</span></div> </p>
                        <p><div className='flex font-bold'><img className='w-5 h-5' src={team} alt="" /> <span>১৪২৪৫ জন Ostad গ্র্যাজুয়েট</span></div> </p>
                       </div>
                       
                        <button className="btn btn-primary"><span className='mr-3'>START LEARNING</span> <img src={arrow} alt="" /> </button>
                        <button className='btn mx-5 btn-primary'>ASSESSMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;