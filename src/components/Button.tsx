import {
  ButtonColor,
  buttonColorMap,
  buttonOutlineMap,
  ButtonSize,
  buttonSizeMap,
} from '@/styles/button'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Flex from './Flex'
import Text from './Text'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  outline?: boolean
  full?: boolean
  disabled?: boolean
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', outline }) =>
    outline ? buttonOutlineMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
          pointer-events: none;
        `
      : undefined,
)

function ButtonGroup({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <Flex direction="column">
      {title != null ? (
        <Text typography="t6" bold>
          {title}
        </Text>
      ) : null}
      <Flex css={buttonGroupStyle}>{children}</Flex>
    </Flex>
  )
}

const buttonGroupStyle = css`
  flex-wrap: wrap;
  gap: 10px;

  & button {
    flex: 1;
  }
`

const Button = BaseButton as typeof BaseButton & { Group: typeof ButtonGroup }

Button.Group = ButtonGroup

export default Button
