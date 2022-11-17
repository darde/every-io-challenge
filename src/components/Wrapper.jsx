import React from 'react'
import styled from 'styled-components'

const WrapperComponent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 30px;
  margin: 0 auto;
`

export default function Wrapper({ children }: { children: React.ReactNode}) {
  return (
    <WrapperComponent>
      {children}
    </WrapperComponent>
  )
}
