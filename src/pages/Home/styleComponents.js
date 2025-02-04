import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "DM Sans", serif;
  padding-top:25px;
  
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const HomeBannerContainer = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  
  @media (max-width: 1024px) {
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24px;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Bannerh4 = styled.h5`
  font-size: 28px;
  color: #22242a;
  margin: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Bannerh1 = styled.h1`
  font-size: 60px;
  text-align: center;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const BannerPara = styled.p`
  color: #37383c;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const BannerButton1 = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #FC2947;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.9px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
`;

export const BannerButton2 = styled(BannerButton1)`
  background: transparent;
  border: 1px solid #ddd;
  color: #000000;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const BannerCompaniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const CompanyLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const BannerCompanies = styled.img`
  height: auto;
  width: 120px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 100px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
  }
`;


export const FeaturesContainer = styled.div`
  height: 70vh;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  .textContent {
    width: 50%;
    max-width: 600px;
    margin-bottom: 40px;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    height: auto;
    width: 90%;
    
    .textContent {
      width: 70%;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    height: auto;
    width: 95%;
    padding: 30px 15px;

    .textContent {
      width: 100%;
    }
  }
`;

export const FeatureHeading = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 32px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 28px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const FeatureDescription = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const FeaturesCardsContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 20px;
    padding: 15px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 16px;
    padding: 10px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    gap: 12px;
    padding: 8px;
  }
`;

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
    height:auto;
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
  
   @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const MetricsPara = styled.p`
  font-size:16px;
  color: #37383c;
  line-height: 1.6;
  @media (max-width:768px){
    text-align:left;
    width:100%;
  }
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
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px;
  
  /* Tablet */
  @media (max-width: 1024px) {
    height: auto;
    min-height: 80vh;
    width: 95%;
    padding: 30px 25px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 25px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const FAQHeading = styled.h2`
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 16px;
  text-align: left;
  
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

export const FAQDescription = styled.p`
  color: #37383c;
  text-align: left;
  max-width: 600px;
  margin-bottom: 48px;
  line-height: 1.6;
  font-size: 1.1rem;
  
  /* Tablet */
  @media (max-width: 1024px) {
    max-width: 500px;
    margin-bottom: 40px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 32px;
    font-size: 1rem;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    margin-bottom: 24px;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const FAQItemsContainer = styled.div`
  border-top: 1px solid #e5e7eb;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-top: 24px;
  
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 14px;
    padding-top: 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 12px;
    padding-top: 16px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    gap: 10px;
    padding-top: 12px;
  }
`;
export const LineSeperator = styled.hr`
  color:#000000;
  width:80%;
`