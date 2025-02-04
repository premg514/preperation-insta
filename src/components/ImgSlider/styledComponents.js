import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 90vh;

  @media (min-width: 640px) {
    padding: 2rem;
    height:60vh;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3.75rem;
    min-height: 70vh;
    padding: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
    gap: 5rem;
    height: 90vh;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  position: relative;
  background-color: #F9FAFB;
  border-radius: 0.75rem;
  padding: 1.5rem;
  order: ${(props) => props.order};

  @media (min-width: 640px) {
    padding: 2rem;

  }

  @media (min-width: 768px) {
    width: 50%;
    max-width: 700px;
  }
  @media (max-width:480px){
    order:1;!important

    }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #E5E7EB;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #F3F4F6;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &.prev {
    left: 0;
    transform: translate(-50%, -50%);
  }

  &.next {
    right: 0;
    transform: translate(50%, -50%);
  }

  @media (min-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  svg {
    width: 0.8rem;
    height: 0.8rem;

    @media (min-width: 640px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #E5E7EB;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 640px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem 0;
`;

export const Dot = styled.button`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#1F2937" : "#D1D5DB")};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContentSection = styled.div`
  order: ${(props) => props.order};
  width: 100%;
  max-width: 32rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0;
  }
    @media (max-width:480px){
    order:1;!important

    }
`;

export const SmallImage = styled.div`
  width: 48px;
  height: 48px;
  background-color: #F3F4F6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    width: 64px;
    height: 64px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #1F2937;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #4B5563;
  line-height: 1.625;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;