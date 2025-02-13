import React from 'react';
import { StyledParagraph, StyledLink } from '../styles/Typography.styled';
import { StyledProjects } from '../styles/Projects.styled';
import { SectionHeading, SectionTitle } from '../styles/SectionHeading';

const Projects = () => {
  return (
    <StyledProjects id='projects'>
      <SectionHeading>
        <SectionTitle number='01'>Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark='true' textAlign='center'>
        Presenting a handpicked collection of my latest work.{' '}
        <StyledLink
          href='https://github.com/VJ-Rahavan'
          target='_blank'
          rel='noopener noreferrer'
        >
          Curious to dive deeper? Let’s take it further.
        </StyledLink>
      </StyledParagraph>
      <h1 style={{ textAlign: 'center' }}>Coming Soon...</h1>
    </StyledProjects>
  );
};

export default Projects;
