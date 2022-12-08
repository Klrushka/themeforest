import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import leftArrow from '../../assets/buttonArrowLeft.png';
import rightArrow from '../../assets/buttonArrowRight.png';
import { scrollLeft, scrollRight } from '../../helpers/scrollBottonsHandlers';
import {
  testimonialsCardsInfo,
  testimonialsTitle
} from '../../mock/data/testimonialsBlock/data';
import { TestimonialCard } from '../TestimonialCard';

import {
  ArrowButton,
  ArrowIcon,
  Buttons,
  TestimonialsBlockWrapper,
  TestimonialsCards,
  TestimonialsHeader,
  Title
} from './style';

export const TestimonialsBlock: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isDisabledLeftScroll = useSelector(
    (state: any) => state.testimonialLeftButton.value
  );
  const isDisabledRightScroll = useSelector(
    (state: any) => state.testimonialRightButton.value
  );

  return (
    <TestimonialsBlockWrapper>
      <TestimonialsHeader>
        <Title>{testimonialsTitle}</Title>
        <Buttons>
          <ArrowButton
            variant={'contained'}
            onClick={scrollLeft(ref, dispatch)}
            disabled={isDisabledLeftScroll}
            >
            <ArrowIcon src={leftArrow} alt={leftArrow} />
          </ArrowButton>
          <ArrowButton
            variant={'contained'}
            onClick={scrollRight(ref, dispatch)}
            disabled={isDisabledRightScroll}
            >
            <ArrowIcon src={rightArrow} alt={rightArrow} />
          </ArrowButton>
        </Buttons>
      </TestimonialsHeader>
      <TestimonialsCards ref={ref}>
        {testimonialsCardsInfo.map(({ description, icon, name, position }) => (
          <TestimonialCard
            key={name}
            description={description}
            icon={icon}
            name={name}
            position={position}
          />
        ))}
      </TestimonialsCards>
    </TestimonialsBlockWrapper>
  );
};
