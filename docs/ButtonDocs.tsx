import React, { Fragment } from 'react'
import { PanelHeader, PanelContent, Text, Button, List } from '../src'
import { useModule } from './useModule'
import { useHistory } from 'daggerboard'

export function ButtonDocs() {
  const [ready, { CodeBlock }] = useModule(import('./CodeBlock'))
  const { push } = useHistory()

  const header = (
    <PanelHeader text="Buttons">
      <Button text="Index" onClick={() => push('')} />
    </PanelHeader>
  )

  if (!ready) return header

  const buttonTypeDemo = (
    <CodeBlock text={buttonTypeCode} demo={<ButtonTypeDemo />} />
  )

  const buttonOnClickDemo = (
    <CodeBlock text={buttonOnClickCode} demo={<ButtonOnClickDemo />} />
  )

  return (
    <Fragment>
      {header}
      <PanelContent>
        <Text body>
          Buttons have three types: primary, secondary, and danger. The type of
          a button can be set in one of two ways. In cases where the button will
          always be rendered with the same type, you can use jsx's boolean
          property shorthand. For more general use, a prop called "type" is
          exposed which accepts any of the strings 'primary', 'secondary', or
          'danger'. By default, buttons are secondary.
        </Text>
        <Text body>
          Primary buttons are intended for more meaningful user actions like
          submitting forms, while secondary buttons are left for more mundane
          uses. Danger buttons signal that clicking might cause undesirable side
          effects.
        </Text>
        <Text body>
          All of these button types can become disabled, which makes the button
          unresponsive.
        </Text>
      </PanelContent>
      <PanelContent>{buttonTypeDemo}</PanelContent>
      <PanelContent>
        <Text body>
          Tempest buttons have an "onClick" prop which works exactly like
          React's.
        </Text>
      </PanelContent>
      <PanelContent>{buttonOnClickDemo}</PanelContent>
    </Fragment>
  )
}

const buttonTypeCode = `<Button primary text="primary" />
<Button secondary text="secondary" />
<Button type={'secondary'} text="dynamic"/>
<Button text="default" />
<Button primary disabled text="disabled" />
<Button attention text="attention" />
`

function ButtonTypeDemo() {
  return (
    <List>
      <Button primary text="primary" />
      <Button secondary text="secondary" />
      <Button type={'secondary'} text="dynamic" />
      <Button text="default" />
      <Button primary disabled text="disabled" />
      <Button attention text="attention" />
    </List>
  )
}

const buttonOnClickCode = `<Button 
  primary 
  onClick={() => alert('Hello!')} 
  text="Say Hello!" 
/>`

function ButtonOnClickDemo() {
  return (
    <Button primary onClick={() => window.alert('Hello!')} text="Say Hello!" />
  )
}
