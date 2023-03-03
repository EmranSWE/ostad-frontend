import React from 'react';
import play from '../../../Assets/play.png';
import Carousel from 'react-elastic-carousel';
import SingleFreeResource from './SingleFreeResource';
import './Slider.css';
import freeCourse from '../../../Assets/freeCourse.png';
const FreeResource = () => {
    const items = [
        { id: 1, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 1',image:freeCourse },
        { id: 2, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 2' ,image:freeCourse},
        { id: 3, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 3',image:freeCourse },
        { id: 4, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 4',image:freeCourse },
        { id: 5, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5',image:freeCourse },
        { id: 6, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5' ,image:freeCourse},
        { id: 7, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5' ,image:freeCourse},
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];



    return (
        <div>
            <div>
                <div className='flex items-center'>
                    <img src={play} alt="" />
                    <h1 className='text-5x font-bold'>ফ্রি ভিডিও রিসোর্স</h1>
                </div>
                <p>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            </div>
            <div>
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <SingleFreeResource key={item.id} item={item} content={item.content} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default FreeResource;