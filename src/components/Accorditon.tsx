import styled from '@emotion/styled'
import { PropsWithChildren, useState } from 'react'
import Text from './Text'
import { colors } from '@/styles/colors'

interface AccordionProps {
  label: string
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <Container className={expanded ? 'open' : ''}>
      <header className="accordion-header" onClick={handleToggle}>
        <Text>{label}</Text>
        <IconArrowDown />
      </header>
      <div className="accordion-contents">{children}</div>
    </Container>
  )
}

function IconArrowDown() {
  return (
    <svg version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}

const Container = styled.section`
  margin-bottom: 6px;
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${colors.green};
    border-radius: 6px;
    cursor: pointer;
  }
  .accordion-contents {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &.open {
    .accordion-contents {
      display: block;
      padding: 20px 10px;
    }
    svg {
      transform: rotate(-180deg);
      transition: transform 0.3s ease;
    }
  }
`
export default Accordion
