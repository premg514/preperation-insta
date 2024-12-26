import React from 'react';
import Header from '../../Header/Header';
import interviewPrepData from '../../Data/interviewPrep';
import {
  Container,
  Title,
  SubTitle,
  Paragraph,
  List,
  ListItem,
  Section,
  SubSection,
  Img,
  Link,
} from './styleComponents';

export default function HrQuestions() {
  const data = interviewPrepData[1];

  return (
    <Container>
      <Header />
      <Title>{data.content[0].mainHeading}</Title>
      <Img 
        src="https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg"
        alt="HR Image"
      />
      {data.content[0].sections.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.heading}</SubTitle>
          {section.description && <Paragraph>{section.description}</Paragraph>}
          {section.points && (
            <List>
              {section.points.map((point, idx) => (
                <ListItem key={idx}>{point}</ListItem>
              ))}
            </List>
          )}
          {section.questions && (
            <div>
              {section.questions.map((q, idx) => (
                <SubSection key={idx}>
                  <h3>{q.question}</h3>
                  <Paragraph>{q.sampleAnswer}</Paragraph>
                  {q.moreLink && (
                    <Link href={q.moreLink} target="_blank" rel="noopener noreferrer">
                      Read more
                    </Link>
                  )}
                </SubSection>
              ))}
            </div>
          )}
        </Section>
      ))}
    </Container>
  );
}
