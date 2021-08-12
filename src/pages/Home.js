import React from 'react';
import LazyHero from 'react-lazy-hero';





const Home = () => {
  return (
    <div className="container">
      
      <div>
            <LazyHero imageSrc="https://images.dog.ceo/breeds/pointer-german/n02100236_5647.jpg" >
                <h1 className="h1LazyHero">Time to Find Your Perfect Pooch!</h1>
            </LazyHero>
      </div>
      

    </div>
  );
};

export default Home;
