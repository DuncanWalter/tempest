import React, { createContext, useContext, ReactNode } from 'react'
import { ButtonTheme } from './button'
import { PanelTheme } from './panel'
import { TextTheme } from './text'
import { TooltipTheme } from './tooltip'

export interface Theme {
  button: ButtonTheme
  panel: PanelTheme
  text: TextTheme
  tooltip: TooltipTheme
}

interface ThemeProviderProps {
  children: ReactNode | ReactNode[]
  theme: Theme
}

const ThemeContext = createContext({
  button: {},
  panel: {},
  text: {},
  tooltip: {},
} as Theme)

export function useTheme(): Theme {
  return useContext(ThemeContext)
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
