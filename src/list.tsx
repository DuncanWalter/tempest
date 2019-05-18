import React, { Children, ReactNode, ReactChildren } from 'react'
import { style } from 'typestyle'
import { ClassName, joinNames } from './styles'

interface ListProps {
  children: ReactNode | ReactNode[]
  className?: ClassName
}

export function List({ children, className }: ListProps) {
  return (
    <ul className={joinNames(ul, className)}>
      {Children.toArray(children).map((child, index) => (
        <li key={index} className={li}>
          {child}
        </li>
      ))}
    </ul>
  )
}

const ul = style({
  listStyleType: 'none',
  marginTop: 0,
  marginBottom: '-12px',
  padding: 0,
  display: 'block',
})

const li = style({
  marginBottom: '12px',
})
