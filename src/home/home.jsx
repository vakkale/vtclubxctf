import React from 'react';
import GeneralInfo from '../modules/home/GeneralInfo.jsx';
import RecentArticles from '../modules/home/RecentArticles.jsx';
import PracticeInfo from '../modules/home/PracticeInfo.jsx';

import Slider from './components/slider/Slider.jsx'

const Home = () => {
    return (
        <div className='main'>
            <Slider />
            <RecentArticles />
            <GeneralInfo />
            <PracticeInfo />
        </div>
    )
}
export default Home;
