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




export default function ImgSlider(props) {
  const {order,slides} = props;

  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

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
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "0.5rem" }}
          />
        </ImageContainer>
        <NavigationButton className="next" onClick={handleNextSlide}>
          <FaChevronRight />
        </NavigationButton>
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot key={index} active={currentSlide === index} onClick={() => setCurrentSlide(index)} />
          ))}
        </DotsContainer>
      </ImageSection>

      <ContentSection order={1} >
        <SmallImage>
          <Image
            src={slides[currentSlide].image}
            alt="Feature icon"
            layout="fill"
            objectFit="cover"
          />
        </SmallImage>
        <Title>{slides[currentSlide].title}</Title>
        <Description>{slides[currentSlide].description}</Description>
      </ContentSection>
    </SliderContainer>
  )
}

