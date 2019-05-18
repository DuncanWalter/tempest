import React, { ReactNode, ReactNodeArray } from 'react'
import { useDispatch } from '@dwalter/spider-hook'
import {
  Panel,
  joinNames,
  justifyCenter,
  alignCenter,
  alignStart,
  Case,
  column,
  Responsive,
} from '../src'
import { style } from 'typestyle'

import { Router } from './Router'

export function App() {
  import('./CodeBlock')

  const dispatch = useDispatch()

  return (
    <ResponsivePage>
      <Router />
      {/* <PanelHeader className={alignCenter} text="Tempest Docs">
        <Button
          danger
          className={boldButton}
          text="Clear"
          onClick={() => dispatch([])}
        />
      </PanelHeader> */}
      {/* <PanelContent>
        <Text body>
          Click on a die in the top section to add another die to the roll. Hit
          the space bar to clear all dice. Click a rolled die to reroll it. Ctrl
          or cmd click on a rolled die to clear that die. Alt or opt click on a
          rolled die to increment its value.
        </Text>
      </PanelContent>
      <PanelContent className={justifyCenter}>
        <Tooltip content={'Text Tooltip Content'}>
          <Text title>Some Text</Text>
        </Tooltip>
      </PanelContent> */}
    </ResponsivePage>
  )
}

function ResponsivePage({
  children,
}: {
  children: ReactNode | ReactNodeArray
}) {
  return (
    <Responsive>
      <Case
        minWidth={0}
        content={
          <div
            className={joinNames(mobileApp, column, justifyCenter, alignCenter)}
          >
            {children}
          </div>
        }
      />
      <Case
        minWidth={648}
        content={
          <div className={joinNames(desktopApp, justifyCenter, alignStart)}>
            <Panel className={appPanel}>{children} </Panel>
          </div>
        }
      />
    </Responsive>
  )
}

const desktopApp = style({
  position: 'relative',
  fontFamily: 'sans-serif',
  minHeight: '100vh',
  backgroundColor: 'rgb(235, 239, 244)',
  padding: '12px',
  boxSizing: 'border-box',
})

const appPanel = style({
  width: '770px',
})

const mobileApp = style({
  fontFamily: 'sans-serif',
  minHeight: '100vh',
  padding: '12px',
  boxSizing: 'border-box',
})

// const boldButton = style({
//   border: 'solid 2px #18181d',
//   boxSizing: 'border-box',
//   color: '#f0f2ee',
//   fontWeight: 'bold',
//   textShadow:
//     '1px 1px 1px black, -1px 1px 1px black, -1px -1px 1px black, 1px -1px 1px black',
// })
