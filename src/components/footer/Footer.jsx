import React from 'react';
import './../footer/footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';


const Footer = () => {
    return <>
        <footer>
            <a href="#" className='footer__logo'> MAZURETS </a>

            <ul className='permalinks'>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> About </a></li>
                <li><a href="#"> Expeirience </a></li>
                <li><a href="#"> Services </a></li>
                <li><a href="#"> Portfolio </a></li>
                <li><a href="#"> Testimonials </a></li>
                <li><a href="#"> Contact </a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"> <BsFacebook/> </a>
                <a href="https://instagram.com"> <BsInstagram/> </a>
                <a href="https://twitter.com"> <BsTwitter/> </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Vladyslav Mazurets. All rights reserved. </small>
            </div>
        </footer>
    </>
}

export default Footer;