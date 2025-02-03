import styled from 'styled-components';

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

export const Message = styled.h1`
  font-size: 3rem;
  color: #343a40;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const NotFoundImg = styled.img`
  max-width: 20%;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 10%;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    margin-bottom: 15px;
  }
`;
