import { css } from '@emotion/react'
import resetStyles from './reset'
import { colorPalette } from './colors'

export default css`
  ${colorPalette}

  ${resetStyles}
`
