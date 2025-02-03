import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundDiv, Message, Button, NotFoundImg } from './styleComponents';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NotFoundDiv>
      <Message>404 - Page Not Found</Message>
      <NotFoundImg src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?t=st=1734596789~exp=1734600389~hmac=3edd4c5f22e357d2c2b61985ee7be8ae9b1820b7efde9462ba3abb8612446018&w=740" ></NotFoundImg>
      <Button onClick={handleGoHome}>Go to Home</Button>
    </NotFoundDiv>
  );
}
