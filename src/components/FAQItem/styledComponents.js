import styled from "styled-components";

export const FAQItemContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem 1rem; /* Added horizontal padding for better spacing on smaller screens */

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding for tablets */
  }

  @media (max-width: 480px) {
    padding: 0.8rem; /* Further reduce padding for mobile screens */
  }
`;

export const FAQQn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    gap: 1.2rem; /* Reduce the gap between elements on smaller screens */
  }

  @media (max-width: 480px) {
    gap: 0.8rem; /* Reduce further for mobile screens */
    flex-wrap: wrap; /* Wrap content on smaller screens */
  }
`;

export const QuestionNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: #22242a;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const QuestionText = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #22242a;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Answer = styled.div`
  margin-top: 1rem;
  margin-left: 3.5rem;
  color: #37383c;
  line-height: 1.6;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (max-width: 768px) {
    margin-left: 2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;
