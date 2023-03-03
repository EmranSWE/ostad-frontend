import React from 'react';
import communityPic from '../../Assets/image 24.png';
import flutter from '../../Assets/flutterCommunity.png';
import mern from '../../Assets/Mern Community.png';
import writting from '../../Assets/contentwritter.png';
import ux from '../../Assets/UX UI.png';
import SingleCommunity from './SingleCommunity';
const Community = () => {
    const community =[
        { image:flutter,batchNo:'ব্যাচ ২৬',seatAvail:'698 members',day:'৫ দিন বাকি',courseTitle:'Flutter Developers Community @Bangladesh'},
        { image:mern,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'Flutter Developers Community @Bangladesh'},
        { image:writting,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'Content Creator Community @Bangladesh'},
        { image:ux,batchNo:'ব্যাচ ২৬',seatAvail:'২০ টি সিট বাকি',day:'৫ দিন বাকি',courseTitle:'UI/UX Designers Community @Bangladesh'},
        
        ]
    return (
        <div>
       <div className='lg:p-10 lg:mx-10'>
       <div className='flex items-center'><img className='mx-4' src={communityPic} alt="live" /> <h1 className='text-2xl font-bold'>জয়েন করুন আমাদের কমিউনিটিতে</h1></div>
        <p className='lg:mt-2'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-12 gap-4'>
       {
            community.map((community,index)=> <SingleCommunity key={index} community={community}></SingleCommunity>)
        }
       </div>
    </div>
    );
};

export default Community;