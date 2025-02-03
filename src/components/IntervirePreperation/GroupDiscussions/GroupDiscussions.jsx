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
  Link,
  Img
} from './styleComponents';
import interviewPrepData from '../../../Data/interviewPrep';

const groupDiscussionData = interviewPrepData[5];

const GroupDiscussions = () => {
  const data = groupDiscussionData;

  return (
    <Container>
      <Title>{data.name}</Title>
      <Img src="https://www.shutterstock.com/shutterstock/videos/16850551/thumb/9.jpg?ip=x480" alt="Group Discussion" />
      {data.content.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.section}</SubTitle>
          {section.description && <Paragraph>{section.description}</Paragraph>}
          {section.skills && (
            <List>
              {section.skills.map((skill, idx) => (
                <ListItem key={idx}>{skill}</ListItem>
              ))}
            </List>
          )}
          {section.categories && (
            <List>
              {section.categories.map((category, idx) => (
                <ListItem key={idx}>{category}</ListItem>
              ))}
            </List>
          )}
          {section.topics &&
            section.topics.map((topic, idx) => (
              <SubSection key={idx}>
                <SubTitle as="h3">{topic.category}</SubTitle>
                <List>
                  {topic.list.map((item, subIdx) => (
                    <ListItem key={subIdx}>{item}</ListItem>
                  ))}
                </List>
              </SubSection>
            ))}
        </Section>
      ))}
    </Container>
  );
};

export default GroupDiscussions;
