import React from 'react';
import freeCourse from '../../../Assets/freeCourse.png';
import clock from '../../../Assets/clock.png';
import calender from '../../../Assets/calender.png';
const SingleFreeResource = ({ item }) => {
const {title,image}=item;
  return (
      <div className='m-5'>
        <div className="card shadow">
          <figure><img className='w-96 ' src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <p>Language Learning</p>
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
            <div className='flex items-center'>
            <img className='w-5 h-5 mx-1' src={clock} alt="" /><h1> 60min</h1>
            </div>
            <div className='flex items-center'>
            <img className='w-5 h-5 mx-1'  src={calender} alt="" /> <h1> 30 March,2022</h1>
            </div>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default SingleFreeResource;