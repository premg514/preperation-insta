import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem 1rem;
  gap: 2rem;
  height:90vh;
  width:90vw;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3.75rem;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  position: relative;
  background-color: #F9FAFB;
  border-radius: 0.75rem;
  padding: 2rem;
  order:${(props)=>props.order};
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #E5E7EB;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 10;

  &:hover {
    background-color: #F3F4F6;
  }

  &.prev {
    left: 0;
    transform: translate(-50%, -50%);
  }

  &.next {
    right: 0;
    transform: translate(50%, -50%);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #E5E7EB;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding:10px;
  overflow:hidden;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
`

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const Dot = styled.button`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#1F2937" : "#D1D5DB")};
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ContentSection = styled.div`
  order:${(props)=>props.order};
  width: 100%;
  max-width: 32rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SmallImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #F3F4F6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Title = styled.h2`
  font-size: 1.875rem;
  color: #1F2937;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.625;
`;
