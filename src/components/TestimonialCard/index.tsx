import React from 'react';

import {
  Avatar,
  CardHeader,
  Description,
  Name,
  NameAndPosition,
  Position,
  TestimationCardWrapper
} from './styled';

export const TestimonialCard: React.FC<{
  icon: string
  name: string
  position: string
  description: string
}> = ({ icon, name, position, description }) => (
  <TestimationCardWrapper>
    <CardHeader>
      <Avatar src={icon} alt={'avatar'} />
      <NameAndPosition>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </NameAndPosition>
    </CardHeader>
    <Description>{description}</Description>
  </TestimationCardWrapper>
);
