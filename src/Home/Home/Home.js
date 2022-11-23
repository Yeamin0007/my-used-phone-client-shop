import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import ContactCard from '../ContactCard/ContactCard';
import HomeAccount from '../HomeAccount/HomeAccount';
import PhoneCategories from '../PhoneCategories/PhoneCategories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider> 
           <AdvertisedItems></AdvertisedItems>
           <HomeAccount></HomeAccount>
           <PhoneCategories></PhoneCategories>
           <ContactCard></ContactCard>
        </div>
    );
};

export default Home;