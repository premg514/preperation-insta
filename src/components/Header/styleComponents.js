import styled from 'styled-components';
import { FaAngleDown } from "react-icons/fa";

const COLORS = {
  primary: '#0070f3',
  secondary: '#666666',
  background: '#ffffff',
  text: '#000000',
  border: '#e4e4e7',
  hover: '#f4f4f5'
};

const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
};

export const NavDiv = styled.div`
  display:flex;
  justify-content:center;
  font-family: "Inter", serif;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f3f4f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width:100%;

  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0.75rem;
  }
`;

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

export const OptionButton = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background: transparent;
  color: ${COLORS.text};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover{
    background:#f3f4f6;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${COLORS.primary}20;
  }
`;


export const DropdownMenu = styled.div`
 background: #ffffff;
  border: 1px solid ${COLORS.border};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media (min-width: 768px) {
    position: absolute;
    top: 30px;
    left: 0;
    width: 200px;
    margin-top: 0;
  }
`;


export const SubMenu = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  background: ${COLORS.background};
  border: 1px solid ${COLORS.border};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 220px;
  min-height: 210px;
  max-height: 500px;
  overflow-y: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${COLORS.hover};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.secondary};
    border-radius: 3px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    position: relative;
    left: 0;
    box-shadow: none;
    border: none;
    border-left: 2px solid ${COLORS.border};
    margin-left: 1rem;
  }
`;


export const Logo = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color:#000000;
  cursor: pointer;
  margin: 0;
`;

export const Button1 = styled.button`
  width:99px;
  height:40px;
  background-color: #FC2947;
  border:none;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  letter-spacing: 0.9px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-right:10px;

  &:hover {
    border-color: transparent;
    transform: translateY(-1px);
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #eee;
    color: #999;
    cursor: not-allowed;
    transform: none;
    
    &::after {
      display: none;
    }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 16px;
  }
`;

export const Button2 = styled.button`
  width:99px;
  height:40px;
  background-color: none;
  color: #000000;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  letter-spacing: 0.9px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

&:hover {
    border-color: transparent;
    transform: translateY(-1px);
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #eee;
    color: #999;
    cursor: not-allowed;
    transform: none;
    
    &::after {
      display: none;
    }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 16px;
  }
`;


export const ArrowIcon = styled(FaAngleDown)`
  transition: transform 0.2s ease;
  transform: ${props => props.rotate ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const MobileSubmenu = styled.div`
  background: ${COLORS.background}f5;
  padding-left: 1rem;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
export const NavOptionsMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
     color:#ffffff;
  background: ${COLORS.background};
  border: 1px solid ${COLORS.border};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 220px;
  padding: 0.5rem;

    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
`;

export const OptionButtonMobile = styled.button`
font-size: 0.875rem;
font-weight: 500;
padding: 0.5rem 1rem;
border-radius: 0.375rem;
border: 1px solid transparent;
background: transparent;
color: ${COLORS.text};
cursor: pointer;
transition: all 0.2s ease;
display: flex;
align-items: center;
gap: 0.5rem;

&:hover {
  background: ${COLORS.hover};
  color: ${COLORS.primary};
}

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${COLORS.primary}20;
}
`;
export const MenuButton = styled.button`
  display: none;
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${COLORS.text};
  
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;
