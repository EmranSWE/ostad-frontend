import React from 'react';
import play from '../../../Assets/play.png';
import Carousel from 'react-elastic-carousel';
import SingleFreeResource from './SingleFreeResource';

const FreeResource = () => {
  const items= [
          {id: 1, title: 'item #1', courseTitle:'IELTS Listening: 15 Days Challenge'},
          {id: 2, title: 'item #2',courseTitle:'IELTS Listening: 15 Days Challenge'},
          {id: 3, title: 'item #3',courseTitle:'IELTS Listening: 15 Days Challenge'},
          {id: 4, title: 'item #4',courseTitle:'IELTS Listening: 15 Days Challenge'},
          {id: 5, title: 'item #5',courseTitle:'IELTS Listening: 15 Days Challenge'}
        ]
      const breakpoint=[
        {width:1, itemsToShow:1},
        {width:550, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:4},
      ]
    
    return (
        <div>
            <div>
               <div className='flex items-center'>
               <img src={play} alt="" />
                <h1 className='text-5x font-bold'>ফ্রি ভিডিও রিসোর্স</h1>
               </div>
               <p>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            </div>
            <Carousel breakpoint={breakpoint}>
        {items.map(item => <SingleFreeResource key={item.id} item={item}></SingleFreeResource>)}
      </Carousel>
            
        </div>
    );
};

export default FreeResource;