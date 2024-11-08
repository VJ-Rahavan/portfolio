import React from 'react';
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from '../styles/Footer.styled';
import { animateScroll as scroll } from 'react-scroll';

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href='mailto:jerichobantiquete@gmail.com'
          data-hover="Let's talk!"
        >
          Feel free to reach out!
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href='tel:+917904939227'>+917904939227</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{' '}
          <FooterSocials>
            <ContactLink
              href='https://github.com/VJ-Rahavan'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </ContactLink>
            <ContactLink
              href='https://www.linkedin.com/in/vijayarahavan-k-065777224/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </ContactLink>
            <ContactLink href='' target='_blank' rel='noopener noreferrer'>
              Instagram
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href='tel:+917904939227'>
            vijayarahavan176@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title='Back to Top' onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{' '}
          <Small href='' target='_blank' rel='noopener noreferrer'>
            Vijayarahavan
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
