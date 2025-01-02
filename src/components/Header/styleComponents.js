import styled from 'styled-components';
import { FaAngleDown } from "react-icons/fa";


export const NavDiv = styled.div`
  font-family: 'Poppins', Arial, sans-serif;
  width: 90vw;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-radius: 25px;
  background-color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  color: #000000;
  background: linear-gradient(to bottom right, #ffffff, #cce7ff); 
  border-radius: 25px;
`;

export const NavOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  position: relative;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const OptionButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 15px;
  transition: background-color 0.3s ease, border 0.3s ease;
  border: none;
  border-radius: 50px;
  color:#ffffff;
   background: #121212; 
  margin: 5px;

  &:hover {
    color: #ffffff;
    background-color: #666666; 
    border: 2px solid #ffffff;
  }

  &:active {
    background-color: #555555; 
    border: 2px solid #38a9f5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 12px;
    text-align: left;
    width: 100%;
  }
`;


export const DropdownMenu = styled.div`
  background-color:#ffffff;
  border: 1px solid ${(props) => props.theme === 'dark' ? '#555555' : '#ddd'};
  box-shadow: 0 4px 8px ${(props) => props.theme === 'dark' ? darkTheme.shadow : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 481px) {
    position: absolute;
    top: 42px;
    left: 0;
    width: 200px;
    margin-top: 0;
  }
`;

export const SubMenu = styled.div`
  background-color: #ffffff;
  border: 1px solid #555555;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: scroll;
  flex: 1 1;
  @media (min-width: 481px) {
    position: absolute;
    top: 0;
    left: 200px;
    width: 200px;
    margin-top: 0;
    height: 60vh;
    overflow-y: scroll;
  }
`;

export const Logo = styled.h4`
  color: ${(props) => props.theme === 'dark' ? '#ffffff' : '#000000'};
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
   color:#ffffff;
   background: #121212; 
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: #666666;
    border: 2px solid #646cff;
  }

  &:active {
    background-color: #888888;
    border: 2px solid #1e90ff;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;



export const ArrowIcon = styled(FaAngleDown)`
  margin-left: 5px;
  color: #ffffff;
  ${(props) =>
    props.rotate &&
    `
    @keyframes rotateAnimation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }

    animation: rotateAnimation 0.3s ease-in-out;
  `}
`;


export const MenuButton = styled.button`
  background-color: ${(props) => props.theme === 'dark' ? '#444444' : 'white'};
  color: ${(props) => props.theme === 'dark' ? '#ffffff' : 'black'};
  font-size: 15px;
  padding: 10px 12px;
  border: none;
  cursor: pointer;

  @media (min-width: 481px) {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

export const NavOptionsMobile = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
     color:#ffffff;
   background: #121212; 
    border: 1px solid #555555;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
`;

export const OptionButtonMobile = styled.button`
  border-radius: 50px;
  color:#ffffff;
   background: #121212; 
  margin: 5px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 15px;
  text-align: left;
  width: 100%;
  transition: background-color 0.3s ease, border 0.3s ease;

  &:active {
    background-color:#1e90ff;
    border: 2px solid #38a9f5;
  }
`;

