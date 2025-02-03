import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from '../Header/Header';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import interviewExperiences from '../../Data/experience';
import {
  Container,
  LayoutContainer,
  ExperienceDetailContainer,
  ExperienceImage,
  ExperienceTitle,
  ExperienceRole,
  ExperienceText,
  Highlight,
  SimilarExperiencesContainer,
  SimilarExperienceItem,
  ExperienceQn,
  ExperienceTextLi,
  StatusIcon,
  StyledVideoSlashIcon,
  StyledVideoIcon,

} from './styleComponents';

export default function ExperienceDetail() {
  const { company } = useParams();
  const experience = interviewExperiences.find((exp) => exp.company === company);

  if (!experience) {
    return <h2>Experience not found!</h2>;
  }

  const isSelected = experience.status === 'SELECTED';

  const similarExperiences = interviewExperiences.filter(
    (exp) => exp.role === experience.role && exp.id !== experience.id
  );

  return (
    <Container>
      <LayoutContainer>
        {/* Main Experience Detail */}
        <ExperienceDetailContainer>
          <ExperienceTitle>{experience.company} interview experience</ExperienceTitle>
          <ExperienceImage
            src="https://img.freepik.com/premium-photo/ultimate-job-interview-animated-encounter-two-3d-characters-desk_983420-46778.jpg"
            alt="Interview Experience"
          />

          <ExperienceRole>{experience.role}</ExperienceRole>
          <ExperienceText>
            <Highlight>Rounds:</Highlight> {experience.rounds}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Candidate:</Highlight> {experience.candidate}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Package: </Highlight> {experience.packageCtc}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Experience in interview:</Highlight> {experience.details.description}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Location:</Highlight> {experience.details.location}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Interviewer:</Highlight> {experience.details.interviewer}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Duration:</Highlight> {experience.details.duration}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Feedback:</Highlight> {experience.details.feedback}
          </ExperienceText>
          <ExperienceText>
            <Highlight>Date:</Highlight> {experience.experienceDate}
          </ExperienceText>
          <ExperienceText color={experience.status === 'SELECTED' ? 'green' : 'red'}>
            <Highlight>Status:</Highlight> {experience.status}
            <StatusIcon>
              {isSelected ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}
            </StatusIcon>
          </ExperienceText>
          <ExperienceText>
            <Highlight>Interview type: </Highlight> {experience.interviewType}
            {experience.interviewType === 'online' ? <StyledVideoIcon /> : <StyledVideoSlashIcon />}
          </ExperienceText>
          <ExperienceQn>Questions that company have asked candidate</ExperienceQn>
          {experience.details.questions.map((each, index) => (
            <ExperienceTextLi key={index}>{each}</ExperienceTextLi>
          ))}
        </ExperienceDetailContainer>

        {/* Similar Experiences */}
        <SimilarExperiencesContainer>
          <h3>Similar Experiences</h3>
          {similarExperiences.length > 0 ? (
            similarExperiences.map((exp) => (
              <SimilarExperienceItem key={exp.id}>
                <h4>{exp.company}</h4>
                <p>
                  <Highlight>Role:</Highlight> {exp.role}
                </p>
                <p>
                  <Highlight>Date:</Highlight> {exp.experienceDate}
                </p>
                <Link to={`/experience/${exp.id}`}>View Details</Link>
              </SimilarExperienceItem>
            ))
          ) : (
            <p>No similar experiences available.</p>
          )}
        </SimilarExperiencesContainer>
      </LayoutContainer>
    </Container>
  );
}
