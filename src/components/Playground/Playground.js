import React from 'react';
import {
  PlaygroundProjectContainer,
  StyledPlayground,
} from '../styles/Playground.styled';
import { SectionHeading, SectionTitle } from '../styles/SectionHeading';
import { StyledParagraph } from '../styles/Typography.styled';
import PlaygroundProjectComponent from './PlaygroundProject';
import { projectsData } from './data';

const Playground = () => {
  return (
    <StyledPlayground id='playground'>
      <SectionHeading>
        <SectionTitle number='03'>Playground</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark='true' textAlign='center'>
        A curated collection of projects I’ve built—part passion, part practice,
        all crafted for the sheer love of creation.
      </StyledParagraph>
      <h1 style={{ textAlign: 'center' }}>Coming Soon...</h1>
    </StyledPlayground>
  );
};

export default Playground;
