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

export const Card = styled.div`
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

export const Heading = styled.h1`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  color: #1e293b;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const SubHeading = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  font-size: 2em;
  color: #334155;
  margin-top: 20px;
  text-align: left;
  letter-spacing: -0.01em;
`;

export const Paragraph = styled.p`
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  color: #475569;
  line-height: 1.6;
  margin: 15px 0;
`;

export const List = styled.ul`
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 15px 0;
  padding-left: 25px;
  color: #475569;
  font-size: 1em;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #0891b2;
  font-size: 1em;
  line-height: 1.5;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: #0e7490;
  }
`;

export const TipHeading = styled.h3`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.4em;
  font-weight: 600;
  color: #0891b2;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

export const Button = styled.button`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  padding: 12px 20px;
  background-color: #0891b2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0e7490;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(8, 145, 178, 0.4);
  }
`;

// Additional layout components
export const ContentSection = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 900px;
`;

export const RoundItem = styled.div`
  background: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  border: 1px solid #e0f2fe;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ExamplesSection = styled.div`
  border-left: 3px solid #0891b2;
  padding-left: 20px;
  margin: 15px 0;
  background: #f8fafc;
  border-radius: 0 8px 8px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const TipSection = styled.div`
  background: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  border: 1px solid #e0f2fe;
`;

export const AdditionalSection = styled.div`
  margin: 30px 0;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;