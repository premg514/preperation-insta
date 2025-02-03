import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FaCode,
  FaLaptopCode,
  FaBook,
  FaTools,
  FaLightbulb,
  FaGraduationCap,
  FaBuilding,
  FaQuestionCircle,
  FaTasks,
  FaUsers
} from "react-icons/fa";
import {
  Container,
  Heading,
  SubHeading,
  Paragraph,
  Section,
  ItemContainer,
  Item,
  AssignmentSection,
  AssignmentItem,
  QuestionSection,
  QuestionItem,
  LearningSection,
  CompanySection,
  ItemList,
  DifficultyBadge,
  AssignmentDifficulty
} from './styleComponents';
import Header from '../Header/Header';
import programmingDetails from '../../Data/programming';

const IconWrapper = ({ children }) => (
  <span className="mr-2 inline-flex items-center text-blue-600">
    {children}
  </span>
);

const SectionWithList = ({ title, items, icon: Icon }) => {
  if (!items || items.length === 0) return null;
  return (
    <Section>
      <SubHeading>
        <IconWrapper>
          <Icon size={24} />
        </IconWrapper>
        {title}
      </SubHeading>
      <ItemContainer>
        {items.map((item, index) => (
          <Item key={index}>
            <h6>{item}</h6>
          </Item>
        ))}
      </ItemContainer>
    </Section>
  );
};

const Programming = () => {
  const { name } = useParams();
  const data = programmingDetails.find((data) => data.name === name);

  if (!data) {
    return (
      <Container>
        <Heading>Programming Language not found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>
        {data.name} <FaCode />
      </Heading>

      <Paragraph>{data.description}</Paragraph>
      <Paragraph>
        <IconWrapper>
          <FaLaptopCode size={20} />
        </IconWrapper>
        <strong>Difficulty:</strong> {data.difficulty}
      </Paragraph>

      <SectionWithList
        title="Use Cases"
        items={data.useCases}
        icon={FaLaptopCode}
      />
      <SectionWithList
        title="Learning Resources"
        items={data.learningResources}
        icon={FaBook}
      />
      <SectionWithList
        title="Best For"
        items={data.bestFor}
        icon={FaLightbulb}
      />
      <SectionWithList
        title="Tools"
        items={data.tools}
        icon={FaTools}
      />
      <SectionWithList
        title="Key Concepts"
        items={data.keyConcepts}
        icon={FaGraduationCap}
      />

      {data.bestForLearning && (
        <LearningSection>
          <h3>
            <IconWrapper>
              <FaGraduationCap size={24} />
            </IconWrapper>
            Best For Learning
          </h3>
          <ItemList>
            {data.bestForLearning.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ItemList>
        </LearningSection>
      )}

      {data.majorCompaniesUsing && (
        <CompanySection>
          <h3>
            <IconWrapper>
              <FaBuilding size={24} />
            </IconWrapper>
            Major Companies Using {data.name}
          </h3>
          <ItemList>
            {data.majorCompaniesUsing.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ItemList>
        </CompanySection>
      )}

      {data.assignments && data.assignments.length > 0 && (
        <AssignmentSection>
          <h3>
            <IconWrapper>
              <FaTasks size={24} />
            </IconWrapper>
            Assignments
          </h3>
          {data.assignments.map((assignment, index) => (
            <AssignmentItem key={index}>
              <h4>{assignment.title}</h4>
              <p>{assignment.description}</p>
              <AssignmentDifficulty level={assignment.difficulty}>
                Difficulty: {assignment.difficulty}
              </AssignmentDifficulty>
            </AssignmentItem>
          ))}
        </AssignmentSection>
      )}

      {data.questions && data.questions.length > 0 && (
        <QuestionSection>
          <h3>
            <IconWrapper>
              <FaQuestionCircle size={24} />
            </IconWrapper>
            Questions and Answers
          </h3>
          {data.questions.map((qa, index) => (
            <QuestionItem key={index}>
              <h4>{qa.question}</h4>
              <p><strong>Answer:</strong> {qa.answer}</p>
            </QuestionItem>
          ))}
        </QuestionSection>
      )}

      <Paragraph>
        <IconWrapper>
          <FaUsers size={20} />
        </IconWrapper>
        <strong>Community Support:</strong> {data.communitySupport}
      </Paragraph>
    </Container>
  );
};

export default Programming;