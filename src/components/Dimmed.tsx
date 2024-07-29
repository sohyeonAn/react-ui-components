import styled from '@emotion/styled'
import { ReactNode } from 'react'

function Dimmed({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--dimmed-zIndex);
`

export default Dimmed
