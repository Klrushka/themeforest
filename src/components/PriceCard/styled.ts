import styled from 'styled-components';

import { Button } from '@mui/material';

// import { styled as styledMUI } from '@mui/material/styles';
import listmark from '../../assets/listMark.png';
import whiteListmark from '../../assets/whiteListMark.png';

export const PriceCardWrapper = styled.div`
  background:  ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  padding-top: ${props => props.theme.size.indent5};
  padding-left: ${props => props.theme.size.indent2};
  padding-right: ${props => props.theme.size.indent2};

  &:nth-child(3)  {
    background:  ${props => props.theme.color.primary};
    color: ${props => props.theme.color.whiteFont};
  }


`;

export const Title = styled.span`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight3};
  font-size: ${props => props.theme.size.fontSize4};
  color: ${props => props.theme.color.blackFont};

  ${PriceCardWrapper}:nth-child(3) & {
    color: ${props => props.theme.color.whiteFont};
  }
`;

export const PriceBlock = styled.div`
  margin-top: ${props => props.theme.size.indent4};
  margin-bottom: ${props => props.theme.size.indent4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: ${props => props.theme.size.fontSize6};
  color: ${props => props.theme.color.blackFont};

  ${PriceCardWrapper}:nth-child(3) & {
    color: ${props => props.theme.color.whiteFont};
  }
`;

export const PerBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.size.indent0};
`;

export const RadioButton = styled.label`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight2};
  font-size: ${props => props.theme.size.fontSize3};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 41px;
  height: 32px;

  border-color: ${props => props.theme.color.primary};
  background: ${props => props.theme.color.white};
  border-width: 2px;
  border-style: solid;
  color: ${props => props.theme.color.blackFont};

  ${PriceCardWrapper}:nth-child(3) &{
    border-color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.blackFont};

  }
`;

export const RButton = styled.input`
  position: absolute;
  transform: scale(3.9);
  margin: 10px;
  opacity: 0;
  &:checked ~ ${RadioButton} {
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.whiteFont};
    border-width: 2px;
    border-style: solid;
  }
`;

export const BenefitsList = styled.ul`
  padding: 0;
  list-style-image: url(${listmark});
  padding-left: ${props => props.theme.size.indent4};
  padding-right: ${props => props.theme.size.indent4};
  font-size: ${props => props.theme.size.fontSize3};

  ${PriceCardWrapper}:nth-child(3) & {
    list-style-image: url(${whiteListmark});
  }
`;

export const Benefit = styled.li`
  margin-bottom: ${props => props.theme.size.indent1};
`;

export const Mark = styled.img`
  margin-right: ${props => props.theme.size.indent0};
`;

export const BuyButton = styled(Button)`
  color: ${props => props.theme.color.white} !important;
  box-shadow: none !important;
  text-transform: none !important;
  font-family: ${props => props.theme.font.mainFont} !important;
  font-weight: ${props => props.theme.size.fontWeight2} !important;

  ${PriceCardWrapper}:nth-child(3) &{
    border-color: ${props => props.theme.color.white} !important;
    background: ${props => props.theme.color.white} !important;
    color: ${props => props.theme.color.primary} !important;
  }
`;
