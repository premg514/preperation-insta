import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  min-height: 100vh;
  box-sizing: border-box;
  color: #212529;
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
  background: linear-gradient(145deg, #ffffff, #dee2e6);
  box-shadow: 7px 7px 14px #ced4da, -7px -7px 14px #ffffff;
  backdrop-filter: blur(50px);
  margin-bottom: 25px;
  padding: 25px;
  width: 90%;
  max-width: 800px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const SubSection = styled.div`
  border-radius: 39px;
  background: #f8f9fa;
  box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.1), -7px -7px 0px rgba(255, 255, 255, 0.6); 
  border-left: 5px solid #17a2b8;
  margin-left: 15px;
  margin-top: 15px;
  padding: 20px;

  h3 {
    margin: 0 0 12px 0;
    color: #17a2b8; 
    font-size: 1.2rem;
  }

  p, ul {
    margin: 0;
    font-size: 1rem;
    color: #495057; 
    line-height: 1.6;
  }

  ul {
    padding-left: 25px;
  }

  li {
    margin-bottom: 10px;
    color: #6c757d; 
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #212529;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #343a40;
  margin-bottom: 15px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.8;
  margin: 12px 0;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 25px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  color: #495057;
  font-size: 1rem;

  &:before {
    content: "• ";
    color: #17a2b8;
    font-weight: bold;
  }
`;

export const Link = styled.a`
  color: #17a2b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #138496;
  }
`;
