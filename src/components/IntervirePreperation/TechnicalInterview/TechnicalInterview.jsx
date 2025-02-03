import React from 'react';
import Header from '../../Header/Header';
import {
  Container,
  Section,
  SubSection,
  Title,
  SubTitle,
  Paragraph,
  List,
  ListItem,
  Img
} from './styleComponents';
import interviewPrepData from '../../../Data/interviewPrep';

const TechnicalInterview = () => {
  const data = interviewPrepData[4];

  return (
    <Container>
      <Title>{data.name}</Title>
      <Img src='https://miro.medium.com/v2/resize:fit:2000/1*RqIWcs6kxsVhhrYBWM_7UA.jpeg' alt='image' />
      {data.content.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.title}</SubTitle>
          {section.heading && <SubTitle as="h3">{section.heading}</SubTitle>}
          <Paragraph>{section.description}</Paragraph>
          {section.points && (
            <List>
              {section.points.map((point, idx) => (
                <ListItem key={idx}>{point}</ListItem>
              ))}
            </List>
          )}
          {section.content &&
            section.content.map((subSection, subIndex) => (
              <SubSection key={subIndex}>
                <SubTitle as="h3">{subSection.section}</SubTitle>
                {subSection.tips && (
                  <List>
                    {subSection.tips.map((tip, tipIndex) => (
                      <ListItem key={tipIndex}>
                        <strong>{tip.title}</strong>
                        <Paragraph>{tip.description}</Paragraph>
                      </ListItem>
                    ))}
                  </List>
                )}
                {subSection.questions && (
                  <List>
                    {subSection.questions.map((q, qIndex) => (
                      <ListItem key={qIndex}>
                        <strong>{q.question}</strong>
                        <Paragraph>{q.answer}</Paragraph>
                      </ListItem>
                    ))}
                  </List>
                )}
                {subSection.links && (
                  <List>
                    {subSection.links.map((link, linkIndex) => (
                      <ListItem key={linkIndex}>
                        <a href={link.link}>{link.label}</a>
                      </ListItem>
                    ))}
                  </List>
                )}
              </SubSection>
            ))}
        </Section>
      ))}
    </Container>
  );
};

export default TechnicalInterview;
