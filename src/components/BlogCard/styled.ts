import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const BlogCardWrrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`

`;

export const Title = styled.span`
  font-family:  ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight3};
  font-size: ${props => props.theme.size.fontSize5};
  color: ${props => props.theme.color.blackFont};
  margin-bottom: ${props => props.theme.size.indent2};
`;

export const Date = styled.span`
  font-family:  ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight0};
  font-size: ${props => props.theme.size.fontSize3};
  color: ${props => props.theme.color.grey};
  margin-top: ${props => props.theme.size.indent2};
  margin-bottom: ${props => props.theme.size.indent2};
`;

export const Description = styled.span`
  font-weight: ${props => props.theme.size.fontWeight0};
  font-size: ${props => props.theme.size.fontSize3};
  color: ${props => props.theme.color.grey};
  margin-bottom: ${props => props.theme.size.indent2};
`;

export const MoreLinkBlock = styled.div``;

export const LinkText = styled(Link)`
  color: ${props => props.theme.color.primary};
  font-weight: ${props => props.theme.size.fontWeight2};
  text-decoration: none;
  margin-right: ${props => props.theme.size.indent0};
`;
export const LinkArrow = styled.img`
`;
