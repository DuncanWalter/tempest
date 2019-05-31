import React from 'react'
import { ReactNode } from 'react'
import { defaultButtonTheme } from './button'
import { defaultPanelTheme } from './panel'
import { defaultTextTheme } from './text'
import { defaultTooltipTheme } from './tooltip'
import { ThemeProvider } from './ThemeProvider'
import { Palette, defaultLight } from './palette'

export const defaultTheme = {
  button: defaultButtonTheme,
  panel: defaultPanelTheme,
  text: defaultTextTheme,
  tooltip: defaultTooltipTheme,
}

interface DefaultThemProviderProps {
  children: ReactNode | ReactNode[]
  palette?: Palette
}

export function DefaultThemeProvider({
  children,
  palette = defaultLight,
}: DefaultThemProviderProps) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
