import React from 'react';
import Header from '../Header/Header';
import {
  HomeContainer,
  Span,
  Image,
  InnerHome,
  Button
} from './styleComponents';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <InnerHome>
        <div>
          <h1>Preparation <Span>Insta</Span></h1>
          <h2>Guidance</h2>
        </div>
        <Image src='https://img.freepik.com/premium-photo/girl-preparing-school_1275912-121514.jpg' />
      </InnerHome>
    </HomeContainer>
  );
}
