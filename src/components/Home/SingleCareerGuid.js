import React from 'react';

const SingleCareerGuid = ({ career }) => {
    const { image, date, courseTitle } = career;
    return (
        <div className='hero mb-10'>
            <div className="card card-compact w-96  shadow-xl">
                <figure><img className='w-96' src={image} alt="Shoes" /></figure>
                <div className='mx-4'>
                    <span>{date}</span>
                    <span>  .5 min read</span>
                   
                </div>
                <div className="card-body">
                    <h2 className="card-title">{courseTitle}</h2>
                    <div className="card-actions justify-between">

                       <p>IELTS Reading</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCareerGuid;