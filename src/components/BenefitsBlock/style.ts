import styled from 'styled-components';

export const BenefitsBlockWrapper = styled.div`
  display: flex;
  background: ${props => props.theme.color.background};
  padding: ${props => props.theme.size.blockCenterIndent}; 
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const Title = styled.span`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: ${props => props.theme.size.fontSize6};
  margin-bottom: ${props => props.theme.size.indent5};
  color: ${props => props.theme.color.black};
`;

export const DescriptionInfo = styled.span`
  font-weight:${props => props.theme.size.fontWeight0};
  font-size: ${props => props.theme.size.fontSize5};
  color: ${props => props.theme.color.grey};
  width: 85%;
`;

export const CardsBlock = styled.div`
  width: 25%;

  &:last-child {
    margin-top: 60px;
  }
`;
