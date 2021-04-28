import React from 'react';

import popcorn from '../images/popcorn.jpeg';

import HomePageArticle from './HomePageArticle';
import ThreePictureSpread from './ThreePictureSpread';

const Home = () => {
    return (
        <>
            <div className="container"><img src={popcorn} alt="Popcorn"/></div>
            <div className="container">
                <h1>QA Cinemas</h1>
            </div>
            <HomePageArticle title="About Us"/>
            <ThreePictureSpread/>
            <HomePageArticle title="And Some More"/>
        </>
    );
}

export default Home;