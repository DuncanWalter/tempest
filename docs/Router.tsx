import React, { Fragment } from 'react'
import { useRouter, useHistory } from 'daggerboard'
import { PanelContent, PanelHeader, Button } from '../src'
import { Landing } from './Landing'
import { ButtonDocs } from './ButtonDocs'

export function Router() {
  return useRouter({
    buttons: <ButtonDocs />,
    '': ({ exact }) => (exact ? <Landing /> : <PageNotFound />),
  })
}

function PageNotFound() {
  const { push, goBack } = useHistory()
  return (
    <Fragment>
      <PanelHeader text="Page Not Found" />
      <PanelContent>
        <Button primary onClick={() => goBack()} text="Go Back" />
        <Button onClick={() => push('/')} text="To Docs" />
      </PanelContent>
    </Fragment>
  )
}
