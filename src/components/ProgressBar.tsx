import { colors } from '@/styles/colors'
import styled from '@emotion/styled'

function ProgressBar({ progress }: { progress: number }) {
  return (
    <Container>
      <BaseProgressBar progress={progress} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.grey};
  overflow: hidden;
  border-radius: 6px;
`

const BaseProgressBar = styled.div<{ progress: number }>(({ progress }) => ({
  height: 10,
  backgroundColor: colors.blue,
  transform: `scaleX(${progress})`,
  transition: 'transform 0.5s',
  transformOrigin: 'left',
}))

export default ProgressBar
