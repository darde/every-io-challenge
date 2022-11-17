import React from 'react';
import Wrapper from './components/Wrapper'
import Phase from './components/Phase'
import PhaseContainer from './components/PhaseContainer';
import Title from './components/Title';

export function ChallengeComponent() {
  return (
    <Wrapper>
      <Title color={'black'}>Todos Application</Title>
      <PhaseContainer>
        <Phase title="To Do" />
        <Phase title="In Progress" />
        <Phase title="Done" />
      </PhaseContainer>
    </Wrapper>
  )
}
