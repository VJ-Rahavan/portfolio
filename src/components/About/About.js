import React from 'react';
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from '../styles/About.styled';
import { SectionHeading, SectionTitle } from '../styles/SectionHeading';
import { StyledParagraph } from '../styles/Typography.styled';
import myImage from '../../assets/my-name.png';
import downloadIcon from '../../assets/icons/download-icon.svg';
import resume from '../../assets/resume.pdf';

const About = () => {
  return (
    <StyledAbout id='about'>
      <SectionHeading dark='true' mb='3rem'>
        <SectionTitle dark='true' number='02'>
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <div
            style={{
              backgroundColor: '#6A0DAD',
              width: '100%',
              height: '100%',
            }}
          >
            <AboutImage src={myImage} />
          </div>
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            I'm Vijayarahavan, a graduate of VHNSN College and currently
            pursuing my master's at SRM University. I have a strong interest in
            exploring the frontend domain.
          </StyledParagraph>
          <StyledParagraph>
            I’m all about crafting seamless, responsive experiences—whether it’s
            a website, web app, or mobile application, built entirely from the
            ground up. My toolkit is packed with essentials like HTML, CSS,
            JavaScript, React Native, React JS, Redux, TailwindCSS, Bootstrap,
            Node.js, MongoDB, and more. Each project is a blend of skill,
            precision, and creativity.
          </StyledParagraph>
          <StyledParagraph>
            With a constant eagerness to learn and grow, I enjoy sharing my
            knowledge with fellow students and developers. I look forward to
            connecting with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download='Vijayarahavan-Resume'
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
