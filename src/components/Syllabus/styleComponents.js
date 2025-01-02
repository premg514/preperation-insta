import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  min-height: 100vh;
  color: #334155;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #0891b2;
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  border-bottom: 3px solid #e2e8f0;

  svg {
    color: #0e7490;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1.5rem 0;
  width: 100%;
  max-width: 1000px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 2rem;
    color: #0891b2;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: #0e7490;
    }
  }

  h3 {
    font-size: 1.75rem;
    color: #1e293b;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: #0891b2;
    }
  }

  h4 {
    font-size: 1.5rem;
    color: #334155;
    margin: 1.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: #0891b2;
    }
  }

  p {
    font-size: 1.1rem;
    color: #475569;
    line-height: 1.6;
    margin: 1rem 0;
  }

  ul {
    list-style-type: none;
    margin: 1rem 0;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    color: #475569;
    margin: 0.75rem 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-left: 3px solid transparent;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-left-color: #0891b2;
      background: #f8fafc;
    }

    svg {
      color: #0891b2;
      min-width: 1.25rem;
    }
  }

  .topic-section {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #0891b2;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem 0;
    width: 90%;
  }
`;

export const TopicItem = styled.li`
  font-size: 1.1rem;
  padding: 0.75rem;
  margin: 0.5rem 0;
  color: #475569;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateX(5px);
    border-color: #0891b2;
    background: #f1f5f9;
  }

  svg {
    color: #10b981;
    min-width: 1.25rem;
  }
`;

export const DownloadButton = styled.button`
  background-color: #0891b2;
  color: #ffffff;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    background-color: #0e7490;
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
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.25rem;
  }
`;