import styled from 'styled-components';
import { FaVideo, FaVideoSlash } from "react-icons/fa6";

export const Container = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  min-height: 100vh;
  color: #334155;
  width:100vw;
  
`;

export const ExperienceDetailContainer = styled.div`
  width: 800px;
  padding: 30px;
  background: linear-gradient(135deg, #ffffff, #f0f9ff);
  border: 1px solid #e0f2fe;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', Arial, sans-serif;
  color: #334155;
  line-height: 1.8;
  height: auto;
  overflow-y: auto;
  margin: 0 auto;
  @media (max-width: 700px) {
  width: 100%;
  }
`;

export const ExperienceImage = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  display: block;
  object-fit: cover;
`;

export const ExperienceTitle = styled.h1`
  font-size: 36px;
  color: #1e293b;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.2px;
`;

export const ExperienceRole = styled.h3`
  font-size: 24px;
  color: #475569;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`;

export const ExperienceText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: justify;
  color: ${(props) => props.color || '#475569'};
  line-height: 1.8;
  transition: color 0.3s;

  &:hover {
    color: #0891b2;
  }
`;

export const Highlight = styled.strong`
  color: #0891b2;
  font-weight: 600;
  text-decoration: underline;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  max-width: 1200px;
  margin: 50px auto;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;

export const SimilarExperiencesContainer = styled.div`
  padding: 25px;
  background: linear-gradient(135deg, #ffffff, #f0f9ff);
  border: 1px solid #e0f2fe;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', Arial, sans-serif;
  color: #475569;
  overflow-y: auto;
  height: auto;
  flex 1 1;
  max-height: 80vh;
`;

export const SimilarExperienceItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e0f2fe;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #f0f9ff;
    transform: translateY(-5px) scale(1.02);
  }

  h4 {
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #0891b2;
    font-weight: 600;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #475569;
  }

  a {
    font-size: 16px;
    color: #0891b2;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #0e7490;
    }
  }
`;

export const ExperienceQn = styled.h3`
  font-size: 24px;
  color: #475569;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

export const ExperienceTextLi = styled.li`
  font-size: 18px;
  margin-bottom: 12px;
  text-align: justify;
  color: ${(props) => props.color || '#475569'};
  transition: color 0.3s;

  &:hover {
    color: #0891b2;
  }
`;

export const StatusIcon = styled.span`
  margin-left: 8px;
  font-size: 18px;
  vertical-align: middle;
`;

export const StyledVideoIcon = styled(FaVideo)`
  color: green;
  margin-left: 8px;
  border: 2px solid green;
  border-radius: 5px;
  padding: 2px;
  animation: pulse 1.5s infinite;
`;

export const StyledVideoSlashIcon = styled(FaVideoSlash)`
  color: #red;
  margin-left: 8px;
  border: 2px solid #cf6679;
  border-radius: 5px;
  padding: 2px;
  animation: shake 0.5s;
  animation-iteration-count: infinite;
`;
