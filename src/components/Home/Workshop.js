import React from 'react';
import workshopPic from '../../Assets/image 23.png';
import courseImage from '../../Assets/image 1.png';
import SingleWorkshop from './SingleWorkshop';
const Workshop = () => {
    const workshop =[
        { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
        { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'},
        { image:courseImage,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'SolidWorks with Keyshot'}
        ]
    return (
        <div>
            <div className='bg-base-200 p-5 lg:m-10 shadow-xl'>
            <div className='flex p-5 items-center'><img className='mx-4' src={workshopPic} alt="live" /> <h1 className='text-3xl'>ওয়ার্কশপ</h1></div>
       <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 '>
       {
            workshop.map((workshop,index)=> <SingleWorkshop key={index} workshop={workshop}></SingleWorkshop>)
        }
       </div>
            </div>
       
    </div>
    );
};

export default Workshop;