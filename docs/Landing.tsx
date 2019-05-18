import React, { Fragment } from 'react'
import { PanelHeader, PanelContent, Text, Button, List } from '../src'
import { useHistory } from 'daggerboard'

export function Landing() {
  const { push } = useHistory()

  return (
    <Fragment>
      <PanelHeader text="Tempest Docs" />
      <PanelContent>
        <Text body>
          We're just getting started- come back when more content has been
          implemented and documented. Tempest is a UI component library with an
          emphasis on productivity and performance.
        </Text>
      </PanelContent>
      <PanelContent>
        <List>
          <Button text="Button" onClick={() => push('buttons')} />
          <Button text="Tooltip" />
          <Button text="Panel" />
          <Button text="List" />
        </List>
      </PanelContent>
    </Fragment>
  )
}
