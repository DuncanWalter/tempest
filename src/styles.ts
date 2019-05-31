import classNames from 'classnames'
import { style } from 'typestyle'

export { classNames as joinNames }

export type ClassName =
  | string
  | false
  | null
  | undefined
  | { [className: string]: unknown }
  | ClassNames

interface ClassNames extends Array<ClassName | ClassNames> {}

interface ReadOption {
  <Option extends string>(
    options: Option[],
    props: { [prop: string]: unknown; type?: Option },
  ): Option | void
  <Option extends string>(
    options: Option[],
    props: { [prop: string]: unknown; type?: Option },
    defaultValue: Option,
  ): Option
}

const readOption = function(
  options: string[],
  props: { [prop: string]: unknown; type?: string },
  defaultValue?: string,
): string | void {
  return (
    options
      .filter(option => props[option] || props.type === option)
      .find((v, i, selections) => {
        if (selections.length > 1) {
          console.error(`Ambiguous options: ${selections}`)
          return false
        }
        return true
      }) || defaultValue
  )
} as ReadOption

export { readOption }

export const justifyCenter = style({
  display: 'flex',
  justifyContent: 'center',
})

export const justifyEnd = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const justifyAround = style({
  display: 'flex',
  justifyContent: 'space-around',
})

export const justifyStart = style({
  display: 'flex',
  justifyContent: 'flex-start',
})

export const justifyBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const alignCenter = style({
  display: 'flex',
  alignItems: 'center',
})

export const alignStretch = style({
  display: 'flex',
  alignItems: 'stretch',
})

export const alignStart = style({
  display: 'flex',
  alignItems: 'start',
})

export const alignEnd = style({
  display: 'flex',
  alignItems: 'end',
})

export const row = style({
  display: 'flex',
  flexDirection: 'row',
})

export const column = style({
  display: 'flex',
  flexDirection: 'column',
})
