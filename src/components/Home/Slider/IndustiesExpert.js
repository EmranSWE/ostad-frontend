import React from 'react';
import teacher from '../../../Assets/Teacher card.png';
import Carousel from 'react-elastic-carousel';
import SingleTeacher from './SingleTeacher';
import careerExpert from '../../../Assets/image 25.png';
const IndustiesExpert = () => {
    const experts = [
        { id: 1, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 1',image:teacher },
        { id: 2, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 2' ,image:teacher},
        { id: 3, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 3',image:teacher },
        { id: 4, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 4',image:teacher },
        { id: 5, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5',image:teacher },
        { id: 6, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5' ,image:teacher},
        { id: 7, title: 'IELTS Listening: 15 Days Challenge', content: 'Some content for item 5' ,image:teacher},
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div>
            <div className='lg:mx-12 mt-20'>
                <div className='flex items-center'>
                    <img className='mx-4' src={careerExpert} alt="" />
                    <h1 className='text-3xl font-bold'>ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন</h1>
                </div>
                <p className='mx-5 mt-4'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            </div>
            <div>
                <Carousel breakPoints={breakPoints}>
                    {experts.map((item) => (
                        <SingleTeacher key={item.id} teacher={item} content={item.content} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default IndustiesExpert;