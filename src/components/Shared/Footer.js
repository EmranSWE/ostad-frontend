import React from 'react';
import logo from '../../Assets/logo ostad.png';
import googlePlay from '../../Assets/google-play 1.png';
import social from '../../Assets/all social.png';
import phone from '../../Assets/phone.png';
import message from '../../Assets/message.png';
import map from '../../Assets/map.png';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
               <img src={logo} alt="" />
                <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
                <h1>ডাউনলোড করুন ওস্তাদ অ্যাপ</h1>
                <img src={googlePlay} alt="" />
                <p>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                <img src={social} alt="" />
            </div>
            <div>
                <span className="footer-title">কুইক লিঙ্ক</span>
                <a className="link link-hover">আপকামিং লাইভ ব্যাচ</a>
                <a className="link link-hover">ফ্রি লাইভ ক্লাস
</a>
                <a className="link link-hover">লাইভ ওয়ার্কশপ</a>
                <a className="link link-hover">জয়েন করুন এক্সপার্টদের টিমে</a>
                <a className="link link-hover">ব্লগ</a>
            </div>
            <div>
                <span className="footer-title">যোগাযোগ</span>
                <a className="link link-hover"><div className='flex items-center'><img src={phone}alt="" /><span className='mx-2'>01781-611903</span></div></a>
                <a className="link link-hover"><div className='flex items-center'><img src={message}alt="" /><span className='mx-2'>support@ostad.app</span></div></a>
                <a className="link link-hover"><div className='flex items-center'><img src={map}alt="" /><span className='mx-2'>Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</span></div></a>
               
            </div>
            <div>
                <span className="footer-title">কোম্পানি</span>
                <a className="link link-hover">আমাদের সম্পর্কে</a>
            </div>
        </footer>
    );
};

export default Footer;