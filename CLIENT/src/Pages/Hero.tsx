import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Carousel from '../Components/Carousal';
import Chole from "../assets/chole-bhature.jpg";

function Hero() {
  return (
    <div >
      <Navbar />
      <Carousel />
      <div className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  '>
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
        <Card image={Chole} title={'Chole Bhature'} description={'Chickpeas with Bread'} price={100} />
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
