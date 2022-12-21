import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import leftArrow from '../../assets/buttonArrowLeft.png';
import rightArrow from '../../assets/buttonArrowRight.png';
import { changeTestimonialsLeft, changeTestimonialsRight } from '../../helpers/scrollButtonsHandlers';
import { TestimonialCardI } from '../../interfaces/TestimonialCard';
import { testimonialsTitle } from '../../mock/data/testimonialsBlock/data';
import { TestimonialCard } from '../TestimonialCard';

import {
  ArrowButton,
  ArrowIcon,
  Buttons,
  TestimonialsBlockWrapper,
  TestimonialsCards,
  TestimonialsContent,
  TestimonialsHeader,
  Title
} from './styled';

export const TestimonialsBlock: React.FC = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state: any) => state.testimonials.value) as TestimonialCardI[];
  return (
    <TestimonialsBlockWrapper>
      <TestimonialsContent>
        <TestimonialsHeader>
          <Title>{testimonialsTitle}</Title>
          <Buttons>
            <ArrowButton
              variant={'contained'} // TODO remove scopes
              onClick={changeTestimonialsLeft(dispatch)}>
              <ArrowIcon src={leftArrow} alt={leftArrow} />
            </ArrowButton>
            <ArrowButton variant={'contained'} onClick={changeTestimonialsRight(dispatch)}>
              <ArrowIcon src={rightArrow} alt={rightArrow} />
            </ArrowButton>
          </Buttons>
        </TestimonialsHeader>
        <TestimonialsCards>
          {testimonials.map(({ description, icon, name, position }) => (
            <TestimonialCard key={name} description={description} icon={icon} name={name} position={position} />
          ))}
        </TestimonialsCards>
      </TestimonialsContent>
    </TestimonialsBlockWrapper>
  );
};
