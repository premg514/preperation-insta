import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  min-height: 100vh;
  box-sizing: border-box;
  color: #334155;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  display: block;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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
  margin-bottom: 20px;
  padding: 25px;
  width: 90%;
  max-width: 800px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SubSection = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #0891b2;
  margin-left: 10px;
  margin-top: 15px;
  padding: 20px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  h3 {
    margin: 0 0 10px 0;
    color: #0891b2;
  }

  &:hover {
    background-color: #e0f2fe;
  }

  p,
  ul {
    margin: 0;
    font-size: 1rem;
    color: #475569;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #1e293b;
  margin-bottom: 25px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #334155;
  margin-bottom: 12px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin: 12px 0;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const List = styled.ul`
  list-style: circle;
  padding-left: 20px;
  color: #475569;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.5;
  color: #0891b2;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: #0e7490;
  }
`;

export const Link = styled.a`
  color: #0891b2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #0e7490;
  }
`;
