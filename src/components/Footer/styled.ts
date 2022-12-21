import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${props => props.theme.color.background};
  padding: 50px 405px 40px 405px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterLogo = styled.img`
  margin: 0%;
`;

export const LinksSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContactsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const ContactsBlock = styled.div`
  width: 50%;
`;
export const SocialBlock = styled.div`
`;

export const JuditialSection = styled.div`
  margin-top: ${props => props.theme.size.indent5};
  display: flex;
  justify-content: flex-start;
`;

export const TitleOfBlock = styled.p`
  margin: '0px 0px 15px 0px'
  font-weight: ${props => props.theme.size.footerTitleBlockFontWeight};
  color: ${props => props.theme.color.blackFont};
`;

export const TelAndMailBlock = styled.div`
  display: grid;
  width: max-content;
  margin-right: ${props => props.theme.size.indent5};
  font-size: ${props => props.theme.size.fontSize3};
`;

export const ContactInfo = styled.div`
  display: flex;
`;

export const Telephone = styled.span`
  margin-bottom: ${props => props.theme.size.indent0};
`;

export const Address = styled.span`
  margin-bottom: ${props => props.theme.size.indent0};
`;

export const Mail = styled(Link)`
  font-weight: ${props => props.theme.size.footerFontWeight};
  text-decoration: none;
  color: ${props => props.theme.color.blackFont};;
`;

export const DrivingDerection = styled(Link)`
  font-weight: ${props => props.theme.size.footerFontWeight};
  text-decoration: none;
  color: ${props => props.theme.color.blackFont};;
`;
export const AddressDrivingDirectionBlock = styled.div`
  display: grid;
  font-size: ${props => props.theme.size.fontSize3};
`;

export const FooterNavigation = styled.ul`
  display: grid;
  margin: 0px 120px 40px 0px;
  padding: 0px;
`;

export const Line = styled.hr`
  color: ${props => props.theme.color.helperBlue3};
  margin: 0px;
`;

export const FooterArrow = styled.img`
  margin-left: ${props => props.theme.size.indent0};
`;

export const SocialLinks = styled.ul`
  padding: 0px;
`;

export const SocialLinkWrapper = styled(Link)`
  margin-right: ${props => props.theme.size.indent0};
`;

export const LinkWrapper = styled(Link)`
  width: max-content;
  text-decoration: none;
  color: ${props => props.theme.color.blackFont};
  margin: 0px 0px 10px 0px;

  &:first-child {
    font-weight: 700;
  }
`;

export const JudialLink = styled(Link)`
  font-size: ${props => props.theme.size.fontSize3};
  text-decoration: none;
  margin-right: ${props => props.theme.size.indent5};
  color: ${props => props.theme.color.grey};
  width: 100%;
  &:last-child {
    margin-left: 20%;
    display: flex;
    justify-content: end;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  margin: 0%;
`;
