import React from 'react';

const SingleTeacher = ({teacher}) => {
    const {image}=teacher;
    return (
        <div className='m-5'>
        <div className="card shadow">
          <figure><img className='w-96 ' src={image} alt="Shoes" /></figure>
        </div>
    </div>
    );
};

export default SingleTeacher;