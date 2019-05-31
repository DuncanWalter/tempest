import * as React from 'react'
import { joinNames, ClassName, readOption } from './styles'
import { style } from 'typestyle'
import { useTheme } from './ThemeProvider'

export interface TextTheme {
  text: string
  caption: string
  body: string
  button: string
  title: string
  display: string
}

const types = ['body', 'caption', 'display', 'title', 'button']

type TextProps = {
  className?: ClassName
  body?: boolean
  caption?: boolean
  display?: boolean
  title?: boolean
  button?: boolean
  type?: 'body' | 'caption' | 'display' | 'title' | 'button'
  children?: string
}

export function Text(props: TextProps) {
  const { text: theme } = useTheme()
  const type = readOption(types, props)
  const className = joinNames(theme.text, props.className, {
    [theme.display]: type === 'display',
    [theme.title]: type === 'title',
    [theme.body]: type === 'body',
    [theme.caption]: type === 'caption',
    [theme.button]: type === 'button',
  })
  if (type == 'title' || type == 'display') {
    return <h1 className={className}>{props.children}</h1>
  } else {
    return <p className={className}>{props.children}</p>
  }
}

const text = style({
  borderRadius: 4,
  transition: '0.2s',
  margin: '0 12px 0',
  lineHeight: 1.0,
  $nest: {
    '& + &': {
      marginTop: '12px',
    },
  },
})

const body = style({
  lineHeight: 1.75,
  $nest: {
    [`&.${text}`]: { fontSize: 18 },
  },
})

const caption = style({
  lineHeight: 1.35,
  $nest: {
    [`&.${text}`]: { fontSize: 14 },
  },
})

const display = style({
  $nest: {
    [`&.${text}`]: { fontSize: 88 },
  },
})

const title = style({
  $nest: {
    [`&.${text}`]: { fontSize: 44 },
  },
})

const button = style({
  $nest: {
    [`&.${text}`]: { fontSize: 20 },
  },
})

export const defaultTextTheme = {
  text,
  caption,
  body,
  button,
  title,
  display,
}
