import styled from "styled-components";

export const MetricCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border:1px solid #ddd;
    border-radius:10px;
`

export const MetricIcon = styled.div`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display:flex;
    justify-content:center;
    a;ign-items:center;
    `

export const MetricNum = styled.h4`
     font-size: 1.25rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.25rem;
`

export const MetricText = styled.p`
    color: #37383c;
    font-size: 0.875rem;
`