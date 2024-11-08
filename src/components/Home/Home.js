import React from 'react';
import { StyledButton } from '../styles/Button.styled';
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
} from '../styles/Home.styled';
import './style.css';
import projectIcon from '../../assets/icons/project-icon.svg';
import aboutIcon from '../../assets/icons/about-me.svg';
import { IconContext } from 'react-icons';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: '1rem' }}>
      <StyledHome id='home'>
        <Name>Vijayarahavan</Name>
        <Title>Frontend Developer</Title>
        <p>
          I craft seamless mobile apps and responsive websites with precision
          and flair.
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to='projects'
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact='true'
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary='true'
            content='B'
            to='about'
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact='true'
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? ' morning' : hour < 18 ? ' afternoon' : ' evening'}
          </span>
          .
        </Greeting>
        <Socials>
          <Social href='' target='_blank' rel='noopener noreferrer'>
            <BsInstagram />
          </Social>
          <Social
            href='mailto:vijayarahavan176@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope />
          </Social>
          <Social
            href='https://github.com/VJ-Rahavan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </Social>
          <Social
            href='https://www.linkedin.com/in/vijayarahavan-k-065777224/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        {/* <Quote>Don't wish for it! Work for it!</Quote> */}
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
