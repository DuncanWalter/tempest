import React, { ReactNode } from 'react'

import Refractor from 'react-refractor'

import jsx from 'refractor/lang/jsx'

import 'prismjs/themes/prism-coy.css'
import { style } from 'typestyle'
import { row, joinNames, justifyCenter, column, justifyBetween } from '../src'

Refractor.registerLanguage(jsx)

interface CodeBlockProps {
  text: string
  demo: ReactNode
}

export function CodeBlock({ text, demo }: CodeBlockProps) {
  return (
    <div className={joinNames(row, justifyCenter)}>
      <div className={codeContainer}>
        <div
          className={joinNames(column, justifyCenter, codeContainerGradient)}
        >
          <Refractor language="jsx" value={text} />
        </div>
      </div>
      <div className={joinNames(column, justifyCenter)}>{demo}</div>
    </div>
  )
}

const codeContainer = style({
  display: 'inline-flex',
  flex: 1,
  flexDirection: 'column',
  borderRadius: '4px',
  // boxShadow: 'inset 0 0 72px 0 #ddddff',
  margin: '0 12px 0',
})

const codeContainerGradient = style({
  flex: 1,
  bottom: 0,
  top: 0,
  borderRadius: '4px',
  padding: '12px',
  // background:
  //   'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)',
  boxShadow: 'inset 0 0 0 1px #222299',
})
