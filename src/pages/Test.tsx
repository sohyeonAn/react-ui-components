import Text from '@/components/Text'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TextField from '@/components/TextField'
import Alert from '@/components/Alert'
import { useAlertContext } from '@/contexts/AlertContext'
import FixedBottomButton from '@/components/FixedBottomButton'
import Skeleton from '@/components/Skeleton'
import ProgressBar from '@/components/ProgressBar'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import Tag from '@/components/Tag'

function Test() {
  const { open } = useAlertContext()

  return (
    <div>
      {/* ScrollProgressBar */}
      <ScrollProgressBar color="green" marginTop={60} />

      <br />
      <br />

      {/* Text */}
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3" textAlign="right" display="block">
        t3
      </Text>
      <Text typography="t4" display="block" bold>
        t4
      </Text>
      <Text>t5</Text>
      <Text typography="t6" color="green">
        t6
      </Text>
      <Text typography="t7" display="inline-block" color="grey">
        t7
      </Text>

      <br />
      <br />

      {/* Button */}
      <Button>default</Button>
      <Button color="success" full>
        success full
      </Button>
      <Button color="error">error</Button>
      <br />
      <Button outline>outline</Button>
      <Button color="success" outline>
        success outline
      </Button>
      <Button color="error" outline full>
        error outline full
      </Button>
      <Button disabled>disabled</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>

      <br />
      <br />

      {/* Button Group */}
      <Button.Group title="버튼 그룹">
        <Button>하나</Button>
        <Button>둘</Button>
        <Button>셋</Button>
      </Button.Group>

      <br />
      <br />

      {/* Input */}
      <Input placeholder="입력" aria-invalid={false} />
      <Input aria-invalid={true} />

      <br />
      <br />

      {/* TextField */}
      <TextField label="아이디" />
      <TextField
        label="비밀번호"
        hasError={true}
        helpMessage={'비밀번호는 8글자 이상 입력해주세요.'}
        type="password"
      />

      <br />
      <br />

      {/* ProgressBar */}
      <ProgressBar progress={0.75} />

      <br />
      <br />

      {/* Skeleton */}
      <Skeleton width={220} height={160} />

      <br />
      <br />

      {/* Alert */}
      <Alert
        title="제목"
        description="설명입니다."
        buttonLabel="ok"
        onButtonClick={() => {}}
        open={false}
      />

      {/* Alert Open Using AlertContext */}
      <Button
        onClick={() => {
          open({
            title: '제목',
            description: '내용입니다',
            onButtonClick: () => {},
          })
        }}
      >
        Alert 열기
      </Button>

      <br />
      <br />

      {/* Tag */}
      <Tag>파랑</Tag>
      <Tag backgroundColor="green">초록</Tag>
      <Tag backgroundColor="red">빨강</Tag>
      <Tag backgroundColor="grey">회색</Tag>
      <Tag backgroundColor="black">검정</Tag>
      <Tag color="green" backgroundColor="black">
        초록 글자
      </Tag>

      <div style={{ height: '60px' }} />
      {/* Fixed Bottom Button */}
      <FixedBottomButton label="바닥 버튼" onClick={() => {}} />
    </div>
  )
}
export default Test
