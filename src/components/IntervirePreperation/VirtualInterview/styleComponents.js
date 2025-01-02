import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  min-height: 100vh;
  color: #334155;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  display: block;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 15px auto;
  }
`;

export const Section = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  padding: 25px;
  margin-bottom: 20px;
  line-height: 1.8;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
`;

export const SubSection = styled.div`
  background-color: #1a1a1a;
  border-left: 4px solid #4a90e2;
  margin-left: 10px;
  margin-top: 15px;
  padding: 20px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  h3 {
    margin: 0 0 10px 0;
    color: #4a90e2;
  }

  &:hover {
    background-color: #292929;
  }

  p,
  ul {
    margin: 0;
    font-size: 1rem;
    color: #e0e0e0;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 25px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const SubTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 12px;
`;

export const Paragraph = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  color: #1e293b;
  line-height: 1.6;
  margin: 12px 0;
`;

export const List = styled.ul`
  font-family: 'DM Sans', sans-serif;
  list-style: circle;
  padding-left: 20px;
  color: #e0e0e0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.5;
  color: #1e293b;
`;

export const FAQItem = styled.div`
  margin-top: 15px;
  padding: 15px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Question = styled.p`
  font-weight: bold;
  color: #4a90e2;
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

export const Answer = styled.p`
  margin-left: 20px;
  font-size: 1rem;
  color: #aaa;
  line-height: 1.6;
`;
