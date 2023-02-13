import React from 'react';
import GeneralInfo from '../modules/home/GeneralInfo.jsx';
import RecentArticles from '../modules/home/RecentArticles.jsx';
import PracticeInfo from '../modules/home/PracticeInfo.jsx';
import Slider from './components/slider/Slider.jsx'
import SemesterVideo from '../modules/home/SemesterVideo.jsx';
import Banner from '../header/banner.jsx';

const Home = () => {
    return (
        <div className='main'>
            <Slider />
            <RecentArticles />
            <GeneralInfo />
            <SemesterVideo />
            <PracticeInfo />
        </div>
    )
}
export default Home;
