import React from 'react';

import footerArrow from '../../assets/footerArrow.png';
import footerGrayArrow from '../../assets/footerGrayArrow.png';
import footerLogo from '../../assets/logoBlue.png';
import {
  aboutFooterNavLinks,
  informationFooterNavLinks,
  judialFooterLinks,
  serviceFooterNavLinks,
  socialFooterLinks
} from '../../mock/footerNavRoutes';

import {
  Address,
  AddressDrivingDirectionBlock,
  ContactInfo,
  ContactsBlock,
  ContactsSection,
  DrivingDerection,
  FooterArrow,
  FooterLogo,
  FooterNavigation,
  FooterWrapper,
  JudialLink,
  JuditialSection,
  Line,
  LinksSection,
  LinkWrapper,
  Mail,
  SocialBlock,
  SocialLinks,
  SocialLinkWrapper,
  TelAndMailBlock,
  Telephone,
  TitleOfBlock
} from './style';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LinksSection>
        <FooterLogo src={footerLogo} alt={'footerLogo'} />
        <FooterNavigation>
          {aboutFooterNavLinks.map(({ value, to }) => (
            <LinkWrapper to={to} key={`${to}${value}`}>
              {value}
            </LinkWrapper>
          ))}
        </FooterNavigation>
        <FooterNavigation>
          {' '}
          {informationFooterNavLinks.map(({ value, to }) => (
            <LinkWrapper to={to} key={`${to}${value}`}>
              {value}
            </LinkWrapper>
          ))}
        </FooterNavigation>
        <FooterNavigation>
          {' '}
          {serviceFooterNavLinks.map(({ value, to }) => (
            <LinkWrapper to={to} key={`${to}${value}`}>
              {value}
            </LinkWrapper>
          ))}
        </FooterNavigation>
      </LinksSection>
      <Line />
      <ContactsSection>
        <ContactsBlock>
          <TitleOfBlock>Contacts</TitleOfBlock>
          <ContactInfo>
            <TelAndMailBlock>
              <Telephone>+1 601-201-5580</Telephone>
              <Mail to={'/'}>
                ensome@info.co.us
                <FooterArrow src={footerArrow} alt={'footerArrrow'} />
              </Mail>
            </TelAndMailBlock>
            <AddressDrivingDirectionBlock>
              <Address>1642 Washington Avenue, Jackson, MS, 39201</Address>
              <DrivingDerection to={'/'}>
                Driving derections
                <FooterArrow src={footerArrow} alt={'footerArrrow'} />
              </DrivingDerection>
            </AddressDrivingDirectionBlock>
          </ContactInfo>
        </ContactsBlock>

        <SocialBlock>
          <TitleOfBlock>Social</TitleOfBlock>
          <SocialLinks>
            {socialFooterLinks.map(({ src, to }) => (
              <SocialLinkWrapper key={to} to={to}>
                <img src={src} alt={to} />
              </SocialLinkWrapper>
            ))}
          </SocialLinks>
        </SocialBlock>
      </ContactsSection>
      <Line />
      <JuditialSection>
        {judialFooterLinks.map(({ value, to }) => (
          <JudialLink to={to} key={to}>
            {value}
            <FooterArrow src={footerGrayArrow} alt={'footerArrow'} />
          </JudialLink>
        ))}
        <JudialLink to={'/'}>© 2022 Ensome. All Rights Reserved.</JudialLink>
      </JuditialSection>
    </FooterWrapper>
  );
};
