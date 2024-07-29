import './App.css'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TextField from '@/components/TextField'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
