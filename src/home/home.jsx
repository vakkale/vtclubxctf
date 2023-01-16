import React from 'react';
import GeneralInfo from '../modules/home/GeneralInfo.jsx';
import RecentArticles from '../modules/home/RecentArticles.jsx';

import Slider from './components/slider/Slider.jsx'

const Home = () => {
    return (
        <div className='main'>
            <Slider />
            <RecentArticles />
            <GeneralInfo />
        </div>
    )
}
export default Home;
