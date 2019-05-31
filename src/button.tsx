import * as React from 'react'

import { Text } from './text'
import { readOption, ClassName, joinNames } from './styles'
import { style } from 'typestyle'
import { useTheme } from './ThemeProvider'

export interface ButtonTheme {
  button: string
  primary: string
  secondary: string
  attention: string
  disabled: string
}

type ButtonType = 'primary' | 'secondary' | 'attention'

const types: ButtonType[] = ['primary', 'secondary', 'attention']

export interface ButtonProps {
  className?: ClassName
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  attention?: boolean
  type?: ButtonType
  text?: string
  onClick?: () => unknown
  children?: never
}

// // TODO: can't use spread operation here...
// export function Button(props: ButtonProps) {
//   const type = readOption(types, props, 'secondary')
//   return (
//     <ControlGroup state={type}>
//       <ButtonSegment {...props} />
//     </ControlGroup>
//   )
// }

export function Button(props: ButtonProps) {
  const { text, disabled = false, onClick, children, className } = props
  const { button: theme } = useTheme()
  const type = readOption(types, props, props.type || 'secondary')

  if (children) {
    console.error('Use the "text" prop of Button instead of passing children')
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={joinNames(
        theme.button,
        className,
        theme[disabled ? 'disabled' : type],
      )}
      disabled={disabled}
    >
      <Text button>{text}</Text>
    </button>
  )
}

const button = style({
  display: 'inline-block',
  color: '#ffffff',
  cursor: 'pointer',
  padding: '8px 12px 8px',
  borderRadius: 4,
  transition: '0.1s',
  margin: '0 12px 0',
  textAlign: 'center',
  border: 'none',
  backgroundColor: 'rgba(94, 135, 201, 0)',
  $nest: {
    '&:focus': {
      outline: 'none',
    },
  },
})

const disabled = style({
  $nest: {
    [`&.${button}`]: {
      backgroundColor: '#9999a3',
      color: '#222233',
      cursor: 'not-allowed',
    },
  },
})

const primary = style({
  $nest: {
    [`&.${button}`]: {
      backgroundColor: 'rgb(34, 34, 153)',
      $nest: {
        '&:focus': {
          backgroundColor: 'rgba(34, 34, 153, 0.85)',
        },
        '&:hover': {
          backgroundColor: 'rgba(34, 34, 153, 0.7)',
        },
        '&:active': {
          backgroundColor: 'rgba(34, 34, 153, 0.55)',
        },
      },
    },
  },
})

const attention = style({
  $nest: {
    [`&.${button}`]: {
      backgroundColor: 'rgb(221, 34, 56)',
      $nest: {
        '&:focus': {
          backgroundColor: 'rgb(221, 34, 56, 0.85)',
        },
        '&:hover': {
          backgroundColor: 'rgb(221, 34, 56, 0.7)',
        },
        '&:active': {
          backgroundColor: 'rgb(221, 34, 56, 0.55)',
        },
      },
    },
  },
})

const secondary = style({
  boxShadow: 'inset 0 0 0 1px #222299',
  $nest: {
    [`&.${button}`]: {
      color: '#222299',
      $nest: {
        '&:hover': {
          backgroundColor: 'rgba(205, 205, 221, 0.5)',
        },
        '&:active': {
          backgroundColor: 'rgba(205, 205, 221, 1)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 2px #222299',
        },
      },
    },
  },
})

export const defaultButtonTheme: ButtonTheme = {
  button,
  disabled,
  primary,
  secondary,
  attention,
}
