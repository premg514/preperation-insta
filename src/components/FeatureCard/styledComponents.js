import styled from "styled-components"

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  min-width: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`


export const ImagePlaceholder = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f8f9fe;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

export const CardTitle = styled.h1`
font-size:1.5rem;

`