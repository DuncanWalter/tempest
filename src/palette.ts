import { Color, createColor } from './color'

const smogGray = createColor('#9999a3')
const darkGray = createColor('#222233')

const deepBlue = createColor('#222299')
const red = createColor('#b52238')
const green = createColor('#22b550')

const midnight = createColor('#000008')
// const pearl = createColor('#fff9fa')
// const ivory = createColor('#fffaf9')
export const frost = createColor('#f9fcff')

const cloud = createColor('#ebeff4')

export interface Palette {
  background: Color
  foreground: Color

  text: Color

  primary: Color
  // neutral: Color
  danger: Color
  success: Color

  disabled: Color
  disabledText: Color
}

export const defaultLight: Palette = {
  text: midnight,
  background: cloud,
  foreground: frost,

  primary: deepBlue,
  // neutral: ,
  success: green,
  danger: red,

  disabled: smogGray,
  disabledText: darkGray,
}
