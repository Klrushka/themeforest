import styled from 'styled-components';

export const CompanyOverviewSectonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10%;
  margin: ${props => props.theme.size.blockCenterIndent};  
`;

export const Title = styled.div`
  font-family: ${props => props.theme.font.mainFont}; 
  font-size: ${props => props.theme.size.fontSize10};  
  font-weight: ${props => props.theme.size.fontWeight4};  
  color: ${props => props.theme.color.blackFont};
`;

export const OverviewSection = styled.div`
  display: flex;
  margin-top: ${props => props.theme.size.indent5};
  margin-bottom: ${props => props.theme.size.indent5};
  justify-content: center;
`;

export const ClientsLogosSection = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

export const OverviewNumbers = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const OverviewDescription = styled.span`
  font-weight: ${props => props.theme.size.fontWeight0};  
  font-size: ${props => props.theme.size.fontSize5};  
  color: ${props => props.theme.color.grey};
  width: 45%;
`;

export const OverviewNumber = styled.span`
  font-weight: ${props => props.theme.size.fontWeight4};  
  font-size: ${props => props.theme.size.fontSize12};  
  color: ${props => props.theme.color.primary};
`;

export const OverviewLabel = styled.span`
  font-weight: ${props => props.theme.size.fontWeight0};  
  font-size: ${props => props.theme.size.fontSize4};  
  color: ${props => props.theme.color.grey};
  width: max-content;
`;

export const OverviewItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.size.indent5};  
`;

export const ClientLogo = styled.li`

`;
