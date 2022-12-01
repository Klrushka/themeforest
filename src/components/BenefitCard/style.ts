import styled from 'styled-components';

export const BenefitCardWrapper = styled.div`
  background: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-right: ${props => props.theme.size.verySmallMargin};
  margin-bottom: ${props => props.theme.size.verySmallMargin};
  width: 70%;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
`;

export const CardIcon = styled.img`
  width: fit-content;
  margin-bottom: ${props => props.theme.size.ultraSmallMargin};
`;

export const CardTitle = styled.span`
  font-weight: ${props => props.theme.size.fontWeight3};
  font-size: ${props => props.theme.size.fontSize5};
  font-family: ${props => props.theme.font.mainFont};
  color: ${props => props.theme.color.black};
  margin-bottom: ${props => props.theme.size.ultraSmallMargin};
  width: fit-content;
`;

export const CardText = styled.span`
  font-weight: ${props => props.theme.size.fontWeight0};
  font-size: ${props => props.theme.size.fontSize3};
  color: ${props => props.theme.color.grey};
`;
