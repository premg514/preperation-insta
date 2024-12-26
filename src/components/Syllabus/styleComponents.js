import styled from 'styled-components';
import { FaRegStar, FaCode, FaClipboardList, FaRegLightbulb, FaClock } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  min-height: 100vh;
  color: #334155;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #0891b2; /* Blue for section titles */
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #0e7490; /* Darker blue for icons */
  }
`;

export const SectionContent = styled.div`
  background: #ffffff; /* White background for content sections */
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 25px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.8rem;
    color: #0891b2; /* Blue for subtitles */
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #0891b2;
    }
  }

  p {
    font-size: 1.1rem;
    color: #475569; /* Grey for text */
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    margin: 10px 0 0 0;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    color: #0891b2; /* Blue for list items */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #0e7490;
    }

    svg {
      color: #ffab00; /* Icon color */
    }
  }
`;

export const TopicItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #475569;
  line-height: 1.8;
  border-left: 4px solid #0891b2; /* Blue accent */
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #f1f5f9;
    color: #0891b2;
  }

  svg {
    color: #ffab00;
  }
`;

export const DownloadButton = styled.button`
  background-color: #0891b2; /* Blue for button */
  color: #ffffff; /* White text on button */
  border: none;
  padding: 12px 25px;
  font-size: 1.3rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;

  &:hover {
    background-color: #0e7490; /* Darker blue on hover */
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: #ffffff;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
`;
