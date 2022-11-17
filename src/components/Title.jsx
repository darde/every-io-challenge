import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 0;
  color: ${({ color }) => color || '#333'};
`

type TitleProps = {
  children: string;
  color?: string;
}

function Title({ children, color }: TitleProps) {
  return (
    <TitleStyled color={color}>{ children }</TitleStyled>
  )
}

export default Title