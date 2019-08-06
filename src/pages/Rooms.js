import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>
  );
};

export default Rooms;
