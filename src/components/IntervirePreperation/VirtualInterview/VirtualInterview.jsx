import React from 'react';
import Header from '../../Header/Header';
import interviewPrepData from '../../../Data/interviewPrep';
import {
  Container,
  Section,
  SubSection,
  Title,
  SubTitle,
  Paragraph,
  List,
  ListItem,
  Img,
  FAQItem,
  Question,
  Answer
} from './styleComponents';

const VirtualInterview = () => {
  const data = interviewPrepData[2];
  return (
    <Container>
      <Title>{data.name}</Title>
      <Img
        src='https://media.istockphoto.com/id/1255922590/vector/young-woman-making-video-call-through-computer.jpg?s=612x612&w=0&k=20&c=cEp_0OcrR3zUjAeRoTybHg-Mbol7woRahC993i8cHYg='
        alt='Virtual Interview Image'
      />
      {data.content.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.topic}</SubTitle>
          {section.description && <Paragraph>{section.description}</Paragraph>}
          {section.subtopics && (
            <List>
              {section.subtopics.map((subtopic, idx) => (
                <ListItem key={idx}>{subtopic}</ListItem>
              ))}
            </List>
          )}
          {section.questionsAndAnswers && (
            <SubSection>
              {section.questionsAndAnswers.map((faq, idx) => (
                <FAQItem key={idx}>
                  <Question>{faq.question}</Question>
                  <Answer>{faq.answer}</Answer>
                </FAQItem>
              ))}
            </SubSection>
          )}
        </Section>
      ))}
    </Container>
  );
};

export default VirtualInterview;