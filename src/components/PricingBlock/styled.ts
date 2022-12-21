import styled from 'styled-components';

export const PricingBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${props => props.theme.size.indent7};
`;

export const Title = styled.span`
  font-family:  ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: ${props => props.theme.size.fontSize10};
  color: ${props => props.theme.color.blackFont};
`;
export const PriceCards = styled.div`
  padding-top: ${props => props.theme.size.indent6};
  padding-bottom: ${props => props.theme.size.indent6};
  display: flex;
  gap: ${props => props.theme.size.indent4};
`;

export const PricingBlockContent = styled.div`
  max-width: 60%;
`;
