import React from 'react';
import people from '../../Assets/team-line.png';
import facebbok from '../../Assets/facebook.png';
const SingleCommunity = ({ community }) => {
    const { image, batchNo, seatAvail, day, courseTitle } = community;
    return (
       <div className='hero'>
         <div className="flex mx-12 shadow-xl">
            <div><figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure></div>
            <div className="card-body ">
            <div  className='flex items-center mx-2'><img src={people} alt="" /><span className='mx-2'>{seatAvail}</span></div>
                <h2 className="card-title">{courseTitle}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button style={{color:'rgba(234, 236, 240, 1)'}} className='btn'>ফেসবুক গ্রুপে জয়েন করুন <img src={facebbok} alt="" /></button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default SingleCommunity;