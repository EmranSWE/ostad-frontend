import React from 'react';
import team from '../../Assets/team-line.png';
import dayImg from '../../Assets/clock.png';
import arrow from '../../Assets/Group.png';
const SingleWorkshop = ({workshop}) => {
    const {image, batchNo, seatAvail,day,courseTitle} = workshop;
    return (
        <div className='hero'>
            <div className="card card-compact w-96  shadow-xl">
                <figure><img className='w-96' src={image} alt="Shoes" /></figure>
                <div style={{backgroundColor:'rgba(29, 41, 57, 1)'}} className='flex items-center p-2'>
                    <p style={{backgroundColor:'rgba(71, 84, 103, 1)', color:"white",}} >{batchNo}</p>
                    <div style={{backgroundColor:'rgba(71, 84, 103, 1)', color:"white",}}  className='flex items-center mx-2'><img src={team} alt="" /><h1 className='mx-2'>{seatAvail}</h1></div>
                    <div style={{backgroundColor:'rgba(71, 84, 103, 1)', color:"white",}} className='flex items-center mx-2'><img src={dayImg} alt="" /><h1 className='mx-2'>{day}</h1></div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{courseTitle}</h2>
                    <div className="card-actions justify-between">
                       <div>
                       <del style={{color:'rgba(255, 140, 75, 1)'}}>3000TK</del>
                        <h1>2000TK</h1>
                       </div>
                        <button style={{color:'rgba(234, 236, 240, 1)'}} className='btn'>বিস্তারিত দেখি <img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleWorkshop;