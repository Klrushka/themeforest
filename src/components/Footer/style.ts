import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${props => props.theme.color.background};
  padding: ${props => props.theme.size.footerWrapperPadding};
`;

export const FooterLogo = styled.img`
  margin: ${props => props.theme.size.footerLogoMargin};
`;

export const LinksSection = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContactsSection = styled.div`
  display: flex;
`;

export const ContactsBlock = styled.div`
  margin: ${props => props.theme.size.footerContactBlockMargin};
`;
export const SocialBlock = styled.div`
  margin: ${props => props.theme.size.footerSocialBlockMargin};
`;

export const JuditialSection = styled.div`
  margin: ${props => props.theme.size.footerJudialSectionMargin};
`;

export const TitleOfBlock = styled.p`
  margin: ${props => props.theme.size.footerTitleBlockFontMargin};
  font-weight: ${props => props.theme.size.footerTitleBlockFontWeight};
`;

export const TelAndMailBlock = styled.div`
  display: grid;
  width: max-content;
  margin: ${props => props.theme.size.footerContactInfoMargin};
  font-size: ${props => props.theme.size.footerFontSize};
`;

export const ContactInfo = styled.div`
  display: flex;
`;

export const Telephone = styled.span`
  margin: ${props => props.theme.size.footerTelephoneMargin};
`;

export const Address = styled.span`
  margin: ${props => props.theme.size.footerAddressMargin};
`;

export const Mail = styled(Link)`
  font-weight: ${props => props.theme.size.footerFontWeight};
  text-decoration: none;
  color: ${props => props.theme.color.black};;
`;

export const DrivingDerection = styled(Link)`
  font-weight: ${props => props.theme.size.footerFontWeight};
  text-decoration: none;
  color: ${props => props.theme.color.black};;
`;
export const AddressDrivingDirectionBlock = styled.div`
  display: grid;
  font-size: ${props => props.theme.size.footerFontSize};
`;

export const FooterNavigation = styled.ul`
  display: grid;
  margin: ${props => props.theme.size.footerNavMargin};
  padding: 0px;
`;

export const Line = styled.hr`
  color: ${props => props.theme.color.helperBlue3};
  margin: 0px;
`;

export const FooterArrow = styled.img`
  margin: ${props => props.theme.size.footerArrowMargin};
`;

export const SocialLinks = styled.ul`
  padding: 0px;
`;

export const SocialLinkWrapper = styled(Link)`
  margin: ${props => props.theme.size.footerSocialLinksMargin};
`;

export const LinkWrapper = styled(Link)`
  width: max-content;
  text-decoration: none;
  color: ${props => props.theme.color.black};
  margin: ${props => props.theme.size.footerNavLinkMargin};

  &:first-child {
    font-weight: 700;
  }
`;

export const JudialLink = styled(Link)`
  font-size: ${props => props.theme.size.footerFontSize};
  text-decoration: none;
  margin: ${props => props.theme.size.footerJudialLinkMargin};
  color: ${props => props.theme.color.grey};

  &:last-child {
    margin: ${props => props.theme.size.footerCopirateMargin};
  }
`;
