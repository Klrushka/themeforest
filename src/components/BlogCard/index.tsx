import React from 'react';

import arrow from '../../assets/arrowIcon.png';

import { BlogCardWrrapper, Date, Description, Image, LinkArrow, LinkText, MoreLinkBlock, Title } from './styled'; ;

export const BlogCard: React.FC<{
  image: string
  title: string
  date: string
  text: string
}> = ({ date, image, text, title }) => {
  return (<BlogCardWrrapper>
    <Image src={image} alt={'blogImage'}/>
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Description>{text}</Description>
    <MoreLinkBlock>
      <LinkText to={'/'}>Read more</LinkText>
      <LinkArrow src={arrow}/>
    </MoreLinkBlock>
  </BlogCardWrrapper>);
};
