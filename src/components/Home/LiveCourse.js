import React from 'react';
import live from '../../Assets/live.png';
import SingleLiveCourse from './SingleLiveCourse';
import courseImage from '../../Assets/image 1.png';
import progress from '../../Assets/image 16.png';
const LiveCourse = () => {

    const liveCourse =[
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
    ]

    return (
        <div>
            <div className=' p-9'><div className='flex items-center '><img src={progress} alt="" /><h1 className='text-2xl mx-5 font-bold'> Ostad helps you in your career with</h1></div>
            <p>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p></div>


            <div className='flex p-9 items-center'><img className='mx-4' src={live} alt="live" /> <h1 className='text-3xl'>লাইভ কোর্সসমূহ</h1></div>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
           {
                liveCourse.map((liveCourse,index)=> <SingleLiveCourse key={index} course={liveCourse}></SingleLiveCourse>)
            }
           </div>
        </div>
    );
};

export default LiveCourse;