import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
 background: linear-gradient(to right, #00bfff 30%, #00008b 60%, black 100%);
  padding: 20px;
  margin: 0;
`;

export const Span = styled.span`
  color:rgb(11, 96, 153);
`;
export const Image = styled.img`
  max-width: 80%;
  height: 80%;
  display: block;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    animation: flash 0.5s;
  }

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;


export const InnerHome = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: poppins;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
