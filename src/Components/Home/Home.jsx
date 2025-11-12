import React from "react";
import HeroSection from "./HeroSection";
import FeaturedModels from "./FeaturedModels";
import CallToAction from "./CallToAction";


const Home = () => {
    return (
        <div className="min-h-screen bg-base-100 text-gray-800">
            <HeroSection></HeroSection>
            <FeaturedModels></FeaturedModels>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;
