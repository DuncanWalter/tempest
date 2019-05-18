import * as React from 'react'

import { Text } from './text'
import { readOption, ClassName, joinNames } from './styles'
import { style } from 'typestyle'
import { useTheme } from './theme'

export interface ButtonTheme {
  button: string
  primary: string
  secondary: string
  danger: string
  disabled: string
}

const types = ['primary', 'secondary', 'danger']

export interface ButtonProps {
  className?: ClassName
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  type?: 'primary' | 'secondary' | 'danger'
  text?: string
  onClick?: () => unknown
  children?: never
}

export function Button(props: ButtonProps) {
  const { text, disabled, onClick, children, className } = props
  const { button: theme } = useTheme()
  if (children) {
    console.error('Use the "text" prop of Button instead of passing children')
  }
  const type = readOption(types, props, 'secondary')
  return (
    <button
      onClick={props.disabled ? undefined : onClick}
      className={joinNames(theme.button, className, {
        [theme.primary]: !disabled && type === 'primary',
        [theme.secondary]: !disabled && type === 'secondary',
        [theme.danger]: !disabled && type === 'danger',
        [theme.disabled]: disabled,
      })}
      disabled={disabled}
    >
      <Text button>{text}</Text>
    </button>
  )
}

const button = style({
  display: 'inline-block',
  borderRadius: 4,
  color: '#ffffff',
  cursor: 'pointer',
  padding: '8px 12px 8px',
  margin: '0 12px 0',
  transition: '0.1s',
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

const danger = style({
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
  $nest: {
    [`&.${button}`]: {
      color: '#222299',
      boxShadow: 'inset 0 0 0 1px #222299',
      $nest: {
        '&:hover': {
          backgroundColor: 'rgba(205, 205, 221, 0.5)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 2px #222299',
        },
        '&:active': {
          backgroundColor: 'rgba(205, 205, 221, 1)',
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
  danger,
}
