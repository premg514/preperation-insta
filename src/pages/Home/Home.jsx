import React from 'react';

import {
  HomeContainer,
  HomeBannerContainer,
  Banner,
  Bannerh4,
  Bannerh1,
  BannerPara,
  BannerButton1,
  BannerButton2,
  BannerCompaniesContainer,
  BannerCompanies,
  FeaturesContainer,
  FeatureHeading,
  FeatureDescription,
  FeaturesCardsContainer
} from './styleComponents';

import googlelogo from '../../assets/googlelogo.png';
import youtubelogo from '../../assets/youtubelogo.png'
import facebooklogo from '../../assets/facebooklogo.png'

import ImgSlider from '../../components/ImgSlider/ImgSlider';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import noImage from '../../assets/noImage.png'


const slides = [
  {
    title: "Organize Your Tasks Efficiently",
    description:
      "Stay on top of your daily activities with our intuitive to-do app. Manage deadlines, set priorities, and track your progress effortlessly.",
    image: noImage,
  },
  {
    title: "Plan Your Day with Smart Scheduling",
    description:
      "Maximize productivity with a smart scheduling system that helps you allocate time effectively and balance work and personal life.",
    image: noImage,
  },
  {
    title: "Seamless Collaboration for Teams",
    description:
      "Work together with your team in real time, assign tasks, and share updates instantly to improve efficiency and teamwork.",
    image: noImage,
  },
  //You can add more data...
];

const featureCards = [
  {
    title: "Mobile app",
    icon: "📱",
  },
  {
    title: "Desktop app",
    icon: "💻",
  },
  {
    title: "Multiple users",
    icon: "👥",
  },
  {
    title: "Integrations",
    icon: "🔄",
  },
]

export default function Home() {
  return (
    <HomeContainer>
      <HomeBannerContainer>
        <Banner>
          <Bannerh4>Label goes here</Bannerh4>
          <Bannerh1>Lorem Ipsum is simply dummy</Bannerh1>
          <BannerPara>Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns. </BannerPara>
          <div>
            <BannerButton1>Order now</BannerButton1>
            <BannerButton2>Explore</BannerButton2>
          </div>
          <BannerCompaniesContainer>
            <BannerPara>Trusted by:</BannerPara>
            <div>
              <BannerCompanies src={googlelogo} ></BannerCompanies>
              <BannerCompanies src={youtubelogo} ></BannerCompanies>
              <BannerCompanies src={facebooklogo} ></BannerCompanies>
            </div>
          </BannerCompaniesContainer>
        </Banner>
      </HomeBannerContainer>
      <ImgSlider slides={slides} order="1" />
      <ImgSlider slides={slides} order="2" />
      <FeaturesContainer>
        <div className='textContent' >
          <FeatureHeading>Browse our set of features</FeatureHeading>
          <FeatureDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quibusdam ad qui commodi itaque debitis modi iure delectus atque!</FeatureDescription>
        </div>
        <FeaturesCardsContainer>
          {
            featureCards.map((each, index) => <FeatureCard key={index} card={each} />)
          }
        </FeaturesCardsContainer>
      </FeaturesContainer>
    </HomeContainer>
  );
}
