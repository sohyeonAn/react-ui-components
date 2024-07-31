import { Link } from 'react-router-dom'
import Flex from './Flex'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

function Navbar() {
  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyle}>
      <Link to="/">홈</Link>
      <Link to="test">테스트</Link>
    </Flex>
  )
}

const navbarContainerStyle = css`
  padding: 10px 24px;
  background-color: ${colors.white};
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${colors.grey};
`
export default Navbar
