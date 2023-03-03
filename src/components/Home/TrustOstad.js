import React from 'react';
import amarTk from '../../Assets/amarTaka.png';
import misfit from '../../Assets/Misfit.png';
import walton from '../../Assets/walton.png';
import romoni from '../../Assets/Romoni.png';
const TrustOstad = () => {
    return (
        <div style={{backgroundColor:'rgba(16, 24, 40, 1)'}} >
            <h1 className='text-2xl p-5 text-center text-white font-bold'>Top companies trust Ostad</h1>
            <div className='grid lg:grid-cols-7 sm:grid-cols-3 p-4'>
                <div><img src={amarTk} alt="" /></div>
                <div><img src={misfit} alt="" /></div>
                <div><img src={walton} alt="" /></div>
                <div><img src={romoni} alt="" /></div>
                <div><img src={walton} alt="" /></div>
                <div><img src={romoni} alt="" /></div>

                <div><img src={amarTk} alt="" /></div>
            </div>
        </div>
    );
};

export default TrustOstad;