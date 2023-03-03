import React from 'react';
import banner from '../../Assets/banner.png';
import liveCourse from '../../Assets/book-3-line.png';
import team from '../../Assets/team-line.png';
import arrow from '../../Assets/Group.png';
const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Tech and development</h1>
                        <p className="py-6">স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন <br /> দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                       <div className='flex'>
                       <div style={{backgroundColor:'rgba(233, 239, 255, 1)'}} className='flex p-1 rounded mx-4'><img className='w-5 h-5' src={liveCourse} alt="" /> <span>৭টি লাইভ কোর্স</span></div> 
                        <div style={{backgroundColor:'rgba(233, 239, 255, 1)'}} className='flex  p-1 rounded'><img className='w-5 h-5 ' src={team} alt="" /> <span>১৪২৪৫ জন Ostad গ্র্যাজুয়েট</span></div>
                       </div>
                       
                       
                        <button style={{backgroundColor:'rgba(16, 24, 40, 1)'}}  className="btn "><span className='m-5 '>START LEARNING</span> <img src={arrow} alt="" /> </button>
                       
                        <button style={{backgroundColor:'rgba(249, 249, 250, 1)'}} className='btn m-5 text-black'>ASSESSMENT</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;