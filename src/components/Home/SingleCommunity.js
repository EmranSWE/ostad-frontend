import React from 'react';
import people from '../../Assets/team-line.png';
import facebbok from '../../Assets/facebook.png';
const SingleCommunity = ({ community }) => {
    const { image,  seatAvail,  courseTitle } = community;
    return (
       <div >
         <div className="grid rounded-lg shadow-2xl">
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <div>
                <figure className=" rounded my-12 mx-4">
                <img src={image} alt={courseTitle} className="w-96 " />
            </figure>
            </div>
            <div className="card-body ">
            <div  className='flex items-center'><img src={people} alt="" />
            <span className='mx-2'>{seatAvail}</span>
            </div>
                <h2 className="card-title">{courseTitle}</h2>
               
                <div className="card-actions">
                <button style={{color:'rgba(234, 236, 240, 1)'}} className='btn'>ফেসবুক গ্রুপে জয়েন করুন <img src={facebbok} alt={courseTitle} /></button>
                </div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default SingleCommunity;