import React from 'react';
import Header from '../../Header/Header';
import interviewPrepData from '../../Data/interviewPrep';
import {
  Container,
  Title,
  SubTitle,
  Section,
  Img,
  List,
  ListItem,
  Link,
  SubSection,
} from './styleComponents';

export default function Puzzels() {
  const puzzlesData = interviewPrepData[3];

  return (
    <Container>
      <Header />
      <Title>Puzzles and Brain Teasers</Title>
      <Img
        src="https://www.shutterstock.com/image-vector/modern-collage-halftone-hands-holding-260nw-2492424807.jpg"
        alt="Puzzles Image"
      />
      {puzzlesData.content.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.topic}</SubTitle>
          <p>{section.description}</p>
          <List>
            {section.puzzles.map((puzzle, idx) => (
              <ListItem key={idx}>
                {puzzle.name}
                {puzzle.action && puzzle.action.button && (
                  <Link href={puzzle.action.link || '#'} target="_blank" rel="noopener noreferrer">
                    {puzzle.action.button}
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </Section>
      ))}
    </Container>
  );
}
