import React from 'react'
import { useHistory } from 'daggerboard'
import { Button } from '../src'

interface LinkProps {
  text: string
  to: string
  external?: boolean
}

export function Link({ text, to }: LinkProps) {
  const { push } = useHistory()

  return (
    <a
      href={to}
      onClick={event => {
        event.preventDefault()
        push(to)
      }}
    >
      <Button text={text} />
    </a>
  )
}
