import React,{useRef,useState} from 'react';
import NavLinks from './NavLinks';

import './MainNavbar.css';
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import movieAnimation from './movieAnimation.json';
const MainNavBar = () => {
    
    return (
        <nav className="main_navbar">
            <div className="left-container">
            <div className="movie-animation">
                    <Lottie animationData={ movieAnimation} loop={true} />
            </div>
                <h1 className='main-title'>SocialApp</h1>
            </div>
            <nav>
            <NavLinks />
            </nav>
            
        </nav>
    );
}
export default MainNavBar;