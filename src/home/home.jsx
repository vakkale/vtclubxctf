import React from 'react';
import RecentArticles from '../modules/home/RecentArticles.jsx';

import Slider from './components/slider/Slider.jsx'

const Home = () => {
    return (
        <div className='main'>
            <Slider />
            <RecentArticles />
        </div>
    )
}
export default Home;
