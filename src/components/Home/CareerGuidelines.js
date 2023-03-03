import React from 'react';
import career from '../../Assets/image 27.png';
import ielts from '../../Assets/ielts.png';
import SingleCareerGuid from './SingleCareerGuid';
const CareerGuidelines = () => {
    const careerGuide =[
        { image:ielts,date:'March 3, 2022',courseTitle:'IELTS Reading Test'},
        { image:ielts,date:'March 3, 2022',courseTitle:'IELTS Reading Test'},
        { image:ielts,date:'March 3, 2022',courseTitle:'IELTS Reading Test'}
        ]
    return (
        <div>
        <div className='flex sm:mx-10 mt-10 items-center'><img className='mx-4' src={career} alt="live" /> <h1 className='text-2xl font-bold '>ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন</h1>
        </div>
        <p className='mx-16 my-5'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
       <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
       {
            careerGuide.map((career,index)=> <SingleCareerGuid key={index} career={career}></SingleCareerGuid>)
        }
       </div>
    </div>
    );
};

export default CareerGuidelines;