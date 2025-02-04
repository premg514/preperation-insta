import { useState } from "react"

import React from "react";
import {
  SliderContainer,
  ImageSection,
  NavigationButton,
  ImageContainer,
  Image,
  DotsContainer,
  Dot,
  ContentSection,
  SmallImage,
  Title,
  Description
} from "./styledComponents"; // Update with the correct path


import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";




const ImgSlider = ({ order, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <SliderContainer>
      <ImageSection order={order}>
        <NavigationButton className="prev" onClick={handlePrevSlide}>
          <FaChevronLeft />
        </NavigationButton>
        <ImageContainer>
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
        </ImageContainer>
        <NavigationButton className="next" onClick={handleNextSlide}>
          <FaChevronRight />
        </NavigationButton>
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </ImageSection>
      <ContentSection order={order === 1 ? 2 : 1}>
        <SmallImage>
          <Image
            src={slides[currentSlide].image}
            alt="Feature icon"
          />
        </SmallImage>
        <Title>{slides[currentSlide].title}</Title>
        <Description>{slides[currentSlide].description}</Description>
      </ContentSection>
    </SliderContainer>
  );
};

export default ImgSlider;