import {
  ButtonColor,
  buttonColorMap,
  buttonOutlineMap,
  ButtonSize,
  buttonSizeMap,
} from '@/styles/button'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  outline?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
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

export default Button
