import styled from "styled-components";

export const FAQItemContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`

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
`

export const QuestionNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: #22242a;
`

export const QuestionText = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #22242a;
  flex: 1;
`

export const Answer = styled.div`
  margin-top: 1rem;
  margin-left: 3.5rem;
  color: #37383c;
  line-height: 1.6;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

