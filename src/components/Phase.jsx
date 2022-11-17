import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const PhaseStyled = styled.div`
  width: 100%;
  min-height: 400px;
  background: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3);
`

function Phase({ title }: { title: string }) {
  return (
    <PhaseStyled>
      <Title>{title}</Title>
    </PhaseStyled>
  )
}

export default Phase