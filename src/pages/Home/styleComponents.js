import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0;
  max-width:100vw;
  overflow-x:hidden;
  background:#FFFFFF;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family: "DM Sans", serif;
  @media (max-width:768px){
    gap:50px;
  }
`;

export const HomeBannerContainer = styled.div`
  height:85vh;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  overflow-x:none;
  scroll-width:none;
  @media (max-width:768px){
    height:auto;
  }
   div{
    display:flex;
    gap:15px;
  }
  `;
export const Banner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:70%;
  width:60%;

`

export const Bannerh4 = styled.h5`
  font-size:28px;
  color:#22242a;

`

export const Bannerh1 = styled.h1`
  font-size:60px;
  text-align:center;
`

export const BannerPara = styled.p`
  color:#37383c;
  font-size:20px;
  text-align:center;
`

export const BannerButton1 = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #FC2947;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.9px;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: transparent;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #eee;
    color: #999;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 16px;
  }
`;

export const BannerButton2 = styled.button`
margin-top: 2rem;
padding: 0.75rem 1.5rem;
border:1px solid #ddd;
background:none;
color: #000000;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;
letter-spacing: 0.9px;
font-size: 20px;
line-height: 24px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;


 &:hover {
    border-color: transparent;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #eee;
    color: #999;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &::after {
      display: none;
    }
  }

@media (max-width: 480px) {
  padding: 0.5rem 1rem;
  font-size: 16px;
}
`;

export const BannerCompaniesContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:auto;
  width:100%;
  div{
     display:flex;
     justify-content:space-between;
     gap:30px;
  }
`
export const BannerCompanies = styled.img`
  height:auto;
  width:120px;
  object-fit:cover;

`

export const FeaturesContainer = styled.div`
  height:70vh;
  width:80%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media (max-width:768px){
    height:100vh;
  }
  .textContent{
    width:50%;
  }

`
export const FeatureHeading = styled.h1`
  font-size:36px;
  text-align:center;

`

export const FeatureDescription = styled.p`
  text-align:center;
  font-size:18px;
`
export const FeaturesCardsContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width:100%;
  margin: 0 auto;
`

export const MetricsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  height:60vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const MetricsTextContainer = styled.div`
   flex: 0 0 35%;
   padding:10px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`

export const MetricsHeading = styled.h2`
  font-size: 30px;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.2;
`

export const MetricsPara = styled.p`
  font-size:16px;
  color: #37383c;
  line-height: 1.6;
`

export const MetricsCardsContainer = styled.div`
  flex: 0 0 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const FAQContainer = styled.div`
  height: 90vh;
  width:90%;
  padding: 20px 20px;
`;

export const FAQHeading = styled.h2`
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 16px;
  text-align: left;
`;

export const FAQDescription = styled.p`
  color: #37383c;
  text-align: left;
  max-width: 600px;
  margin-bottom: 48px;
  line-height: 1.6;
`;

export const FAQItemsContainer = styled.div`
  margin-top: 20px;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
export const LineSeperator = styled.hr`
  color:#000000;
  width:80%;
`