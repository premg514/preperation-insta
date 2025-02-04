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
  FeaturesCardsContainer,
  MetricsContainer,
  MetricsTextContainer,
  MetricsHeading,
  MetricsPara,
  MetricsCardsContainer,
  LineSeperator,
  FAQContainer,
  FAQHeading,
  FAQDescription,
  FAQItemsContainer

} from './styleComponents';

import googlelogo from '../../assets/googlelogo.png';
import youtubelogo from '../../assets/youtubelogo.png'
import facebooklogo from '../../assets/facebooklogo.png'

import ImgSlider from '../../components/ImgSlider/ImgSlider';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import MetricsCard from '../../components/MetricsCards/MetricsCard';
import noImage from '../../assets/noImage.png'
import FAQItem from '../../components/FAQItem/FAQItem';



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

const metrics = [
  {
    value: "200+",
    label: "Websites build",
  },
  {
    value: "97%",
    label: "Client satisfaction",
  },
  {
    value: "34+",
    label: "Team members",
  },
  {
    value: "100+",
    label: "Amazing clients",
  },
]

const FAQ = [
  {
    id: "01",
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    id: "02",
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: "03",
    question: "How do you clone a Webflow Template?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: "04",
    question: "Why is BRIX Templates the best Webflow agency?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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

      <MetricsContainer>
        <MetricsTextContainer>
          <MetricsHeading>Numbers that showcase our success</MetricsHeading>
          <MetricsPara>Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere augue vestibulum eget turpis lobortis donec sapien integer phasellus quisque.</MetricsPara>
        </MetricsTextContainer>
        <MetricsCardsContainer>
          {
            metrics.map((each, index) => <MetricsCard card={each} key={index} />)
          }
        </MetricsCardsContainer>
      </MetricsContainer>

      <FAQContainer>
        <FAQHeading>Frequently Asked Questions</FAQHeading>
        <FAQDescription>Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</FAQDescription>
        <FAQItemsContainer>
          {
            FAQ.map((each, index) => <FAQItem item={each} key={index} />)
          }
        </FAQItemsContainer>
      </FAQContainer>

    </HomeContainer>
  );
}
