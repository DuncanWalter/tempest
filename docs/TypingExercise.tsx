import React, { Fragment } from 'react'
import { PanelHeader, PanelContent, Input, Button } from '../src'

export function TypingExercise() {
  return (
    <Fragment>
      <PanelHeader text="Typing Exercise" />
      <PanelContent>
        <Input placeholder="type here" onChange={() => {}} />
        <Button primary text="Reset" onClick={() => {}} />
      </PanelContent>
    </Fragment>
  )
}
