import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import Text from './Text'
import Input from './Input'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  hasError?: boolean
  helpMessage?: ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hasError, helpMessage, onFocus, onBlur, ...props },
    ref,
  ) {
    const [focused, setFocused] = useState<boolean>(false)
    const labelColor = hasError ? 'red' : focused ? 'blue' : undefined

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true)
      onFocus?.(event)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false)
      onBlur?.(event)
    }

    return (
      <div>
        {label ? (
          <Text
            typography="t7"
            color={labelColor}
            display="block"
            textAlign="left"
          >
            {label}
          </Text>
        ) : null}

        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="block"
            textAlign="left"
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    )
  },
)

export default TextField
