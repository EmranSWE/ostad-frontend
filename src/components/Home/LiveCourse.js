import React from 'react';
import live from '../../Assets/live.png';
import SingleLiveCourse from './SingleLiveCourse';
import courseImage from '../../Assets/image 1.png';
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