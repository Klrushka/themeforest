import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import leftArrow from '../../assets/buttonArrowLeft.png';
import rightArrow from '../../assets/buttonArrowRight.png';
import { scrollLeftBlog, scrollRightBlog } from '../../helpers/scrollButtonsHandlers';
import { cards, title } from '../../mock/data/blogBlock/data';
import { BlogCard } from '../BlogCard';

import {
  ArrowButton,
  ArrowIcon,
  BlogBlockContent,
  BlogBlockWrapper,
  BlogCards,
  Buttons,
  Header,
  Title
} from './styled';

export const BlogBlock: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isDisabledLeftScroll = useSelector((state: any) => state.blogLeftButton.value);
  const isDisabledRightScroll = useSelector((state: any) => state.blogRightButton.value);
  return (
    <BlogBlockWrapper>
      <BlogBlockContent>
        <Header>
          <Title>{title}</Title>
          <Buttons>
            <ArrowButton variant={'contained'} onClick={scrollLeftBlog(ref, dispatch)} disabled={isDisabledLeftScroll}>
              <ArrowIcon src={leftArrow} alt={'leftArrow'} />
            </ArrowButton>
            <ArrowButton
              variant={'contained'}
              onClick={scrollRightBlog(ref, dispatch)}
              disabled={isDisabledRightScroll}>
              <ArrowIcon src={rightArrow} alt={'rightArrow'} />
            </ArrowButton>
          </Buttons>
        </Header>
        <BlogCards ref={ref}>
          {cards.map(({ date, image, text, title }, index) => (
            <BlogCard date={date} image={image} text={text} title={title} key={index} />
          ))}
        </BlogCards>
      </BlogBlockContent>
    </BlogBlockWrapper>
  );
};
