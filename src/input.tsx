import React, { ChangeEvent, ComponentProps } from 'react'
import { style } from 'typestyle'
import { readOption, joinNames, ClassName } from './styles'

type InputState = 'attention' | 'success' | 'primary'

interface InputProps extends ComponentProps<'input'> {
  content?: string
  placeholder?: string
  state?: InputState
  disabled?: boolean
  onChange?: (event: ChangeEvent) => unknown
  className: ClassName
  attention?: true
  success?: true
  primary?: true
}

const states: InputState[] = ['attention', 'success', 'primary']

// export function Input(props: InputProps) {
//   const state = readOption(states, props, 'primary')
//   const { disabled = false, onChange, placeholder, content } = props

//   return (
//     <ControlGroup state={disabled ? 'disabled' : state}>
//       <InputSegment
//         disabled={disabled}
//         state={state}
//         onChange={onChange}
//         placeholder={placeholder}
//         content={content}
//       />
//     </ControlGroup>
//   )
// }

export function Input(props: InputProps) {
  const state = readOption(states, props, 'primary')
  const { disabled = false, onChange } = props
  return (
    <input
      type="text"
      disabled={disabled}
      className={joinNames(stateStyle[state], input)}
      onChange={onChange}
      value={props.content}
      placeholder={props.placeholder}
    />
  )
}

const input = style({
  padding: '8px 12px 8px',
  transition: '0.1s',
  fontSize: '20px',
  border: 'none',
  minWidth: '100px',
  backgroundColor: 'rgb(239, 242, 250)',
  $nest: {
    '&:focus': {
      backgroundColor: 'rgb(229, 233, 245)',
    },
  },
})

const stateStyle = {
  attention: style({
    $nest: {
      [`&.${input}`]: {
        color: '#ff0000',
      },
    },
  }),
  primary: style({
    $nest: {
      [`&.${input}`]: {
        color: '#0000ff',
      },
    },
  }),
  success: style({
    $nest: {
      [`&.${input}`]: {
        color: '#00ff00',
      },
    },
  }),
}
