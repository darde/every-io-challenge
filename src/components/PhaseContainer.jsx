import React from 'react';
import styled from 'styled-components';

const PhaseContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  div+div {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    div {
      min-height: auto;
      height: 300px;
    }

    div+div {
      margin: 0;
      margin-top: 30px;
    }
  }
`
  

function PhaseContainer({ children }: { children: React.ReactNode }) {
  return (
    <PhaseContainerStyled>{ children }</PhaseContainerStyled>
  )
}

export default PhaseContainer