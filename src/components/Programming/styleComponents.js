import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  color: #2d3436;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  z-index: 1000;
  transform: translateZ(0);
`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #2d3436 0%, #000000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
  
  svg {
    vertical-align: middle;
    margin-left: 0.5rem;
  }
`;

export const SubHeading = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(90deg, #0071e3 0%, #00a8ff 100%);
    border-radius: 2px;
  }
`;

export const Section = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  margin: 1.5rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 1200px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Item = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  }

  h6 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3436;
    margin: 0;
  }
`;


const SharedSectionStyles = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  margin: 1.5rem auto;
  width: 90%;
  max-width: 1200px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0071e3;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 2.5rem;
      height: 0.25rem;
      background: #0071e3;
      border-radius: 2px;
    }
  }
`;

export const LearningSection = styled(SharedSectionStyles)`
  background: linear-gradient(135deg, #f1f9fe 0%, #ffffff 100%);
`;

export const CompanySection = styled(SharedSectionStyles)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`;

export const AssignmentSection = styled(SharedSectionStyles)`
  background: linear-gradient(135deg, #f9f9fb 0%, #ffffff 100%);
`;

export const QuestionSection = styled(SharedSectionStyles)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`;

export const AssignmentItem = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2d3436;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: #4a4a4a;
    margin: 0.5rem 0;
  }

  .difficulty-wrapper {
    margin-top: 0.5rem;
  }
`;


export const QuestionItem = styled(AssignmentItem)`
  &:hover {
    transform: translateX(0);
    transform: translateY(-2px);
  }
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #4a4a4a;
    
    &:before {
      content: '•';
      color: #0071e3;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;



export const DifficultyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  
  ${({ level }) => {
    switch (level?.toLowerCase()) {
      case 'easy':
        return `
          background-color: #e6f4ea;
          color: #137333;
          border: 1px solid #137333;
        `;
      case 'moderate':
        return `
          background-color: #fef7e0;
          color: #b93;
          border: 1px solid #b93;
        `;
      case 'hard':
        return `
          background-color: #fce8e8;
          color: #d93025;
          border: 1px solid #d93025;
        `;
      case 'expert':
        return `
          background-color: #4a154b;
          color: #ffffff;
          border: 1px solid #4a154b;
        `;
      default:
        return `
          background-color: #f8f9fa;
          color: #2d3436;
          border: 1px solid #2d3436;
        `;
    }
  }}
`;

export const AssignmentDifficulty = styled(DifficultyBadge)`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  margin-top: 0.5rem;
`;

// Update Paragraph to handle difficulty section specifically
export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  max-width: 900px;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
  
  &.difficulty-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  strong {
    color: #2d3436;
    font-weight: 600;
  }
`;

