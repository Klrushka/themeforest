import styled from 'styled-components';

export const TestimationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.size.indent5};
  background-color: ${props => props.theme.size.white};
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  width: 100%;
`;
export const CardHeader = styled.div`
  display: flex;
  gap: ${props => props.theme.size.indent3};
  margin-bottom: ${props => props.theme.size.indent3};
`;

export const Avatar = styled.img`

`;

export const NameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.size.indent0};
  width: 150px;
`;

export const Name = styled.span`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight3};
  font-size: ${props => props.theme.size.fontSize4};
  color: ${props => props.theme.color.black};
`;

export const Position = styled.span`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight1};
  font-size: ${props => props.theme.size.fontSize3};
  color: ${props => props.theme.color.grey};

`;

export const Description = styled.q`
  font-weight: ${props => props.theme.size.fontWeight0};
  font-size: ${props => props.theme.size.fontSize4};
  color: ${props => props.theme.color.grey};
`;
