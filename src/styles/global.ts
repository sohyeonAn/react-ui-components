import { css } from '@emotion/react'
import resetStyles from './reset'
import { colorPalette } from './colors'

export default css`
  :root {
    --dimmed-zIndex: 10;
  }

  ${colorPalette}

  ${resetStyles}
`
