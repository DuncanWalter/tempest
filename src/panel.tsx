import * as React from 'react'
import { ReactNode } from 'react'
import { style } from 'typestyle'
import { joinNames, justifyBetween, ClassName, alignCenter } from './styles'
import { Text } from './text'
import { useTheme } from './ThemeProvider'

export interface PanelTheme {
  content: string
  divider: string
  flush: string
  header: string
  panel: string
}

interface PanelProps {
  className?: ClassName
  children: ReactNode
  flush?: boolean
}

interface PanelHeaderProps {
  className?: ClassName
  text: string
  children?: ReactNode
}

interface PanelContentProps {
  className?: ClassName
  children: ReactNode
  flush?: boolean
}

export function Panel(props: PanelProps) {
  const { children, className } = props
  const { panel: theme } = useTheme()
  return (
    <div
      className={joinNames(className, theme.panel, props.flush && theme.flush)}
    >
      {children}
    </div>
  )
}

export function PanelHeader({ text, children, className }: PanelHeaderProps) {
  const { panel: theme } = useTheme()
  return (
    <div
      className={joinNames(
        className,
        justifyBetween,
        alignCenter,
        theme.header,
      )}
    >
      <Text title>{text}</Text>
      <div>{children}</div>
    </div>
  )
}

export function PanelContent(props: PanelContentProps) {
  const { children, className } = props
  const { panel: theme } = useTheme()
  return (
    <div
      className={joinNames(
        className,
        theme.content,
        props.flush && theme.flush,
      )}
    >
      {children}
    </div>
  )
}

export function PanelDivider() {
  return <hr className={divider} />
}

const panel = style({
  borderRadius: 4,
  display: 'inline-block',
  paddingTop: '24px',
  margin: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.18)',
})

const header = style({
  padding: '0 12px 24px',
})

const content = style({
  padding: '0 12px 24px',
  $nest: {
    [`.${header} + &, & + &`]: {
      marginTop: '12px',
    },
  },
})

const divider = style({
  width: '100%',
  height: '2px',
  border: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.12)',
  margin: '0 0 24px',
})

const flush = style({
  $nest: {
    [`&.${content}`]: {
      padding: '0 0 24px',
    },
    [`&.${panel}`]: {
      margin: '0',
    },
  },
})

export const defaultPanelTheme = {
  panel,
  header,
  content,
  flush,
  divider,
}
