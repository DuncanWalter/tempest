// import React, { useCallback, useState, ReactNode } from 'react'
// import { style } from 'typestyle'
// import { joinNames } from './styles'

// // TODO: Move over to here...

// type ControlGroupState =
//   | 'primary'
//   | 'secondary'
//   | 'disabled'
//   | 'attention'
//   | 'success'

// interface ControlGroupProps {
//   children: ReactNode | ReactNode[]
//   state?: ControlGroupState
// }

// export function ControlGroup(props: ControlGroupProps) {
//   const [hasFocus, setHasFocus] = useState(false)

//   const gainFocus = useCallback(() => setHasFocus(true), [setHasFocus])
//   const loseFocus = useCallback(() => setHasFocus(false), [setHasFocus])

//   return (
//     <div
//       className={joinNames(controlGroup, hasFocus && focus)}
//       onFocusCapture={gainFocus}
//       onBlurCapture={loseFocus}
//     >
//       {props.children}
//       <div />
//     </div>
//   )
// }

// const focus = style({})

// const controlGroup = style({
//   display: 'inline-block',
//   position: 'relative',
//   margin: '0 12px 0',
//   transition: '0.1s',
//   // borderRadius: '4px',
//   outline: 'none',
//   // boxShadow: 'inset 0 0 0 1px #222299',
//   $nest: {
//     // [`&.${focus}`]: {
//     //   boxShadow: 'inset 0 0 0 2px #222299',
//     // },
//     '& > div:last-child': {
//       position: 'absolute',
//       display: 'block',
//       pointerEvents: 'none', // background: 'red',
//       left: 0,
//       top: 0,
//       right: 0,
//       bottom: 0,
//       borderRadius: '4px',
//       boxShadow: 'inset 0 0 0 1px #222299',
//     },
//     [`&.${focus} > div:last-child`]: {
//       boxShadow: 'inset 0 0 0 2px #222299',
//     },
//   },
// })

// export const controlSegment = style({
//   display: 'inline-block',
//   //   borderRadius: 4,
//   //   color: '#ffffff',
//   // cursor: 'pointer',
//   //   padding: '8px 12px 8px',
//   //   margin: '0 12px 0',
//   //   transition: '0.1s',
//   // textAlign: 'center',
//   //   fontSize: '20px',
//   //   border: 'none',
//   //   boxShadow: 'inset 0 0 0 1px #222299',
//   //   minWidth: '100px',
//   //   backgroundColor: 'rgb(239, 242, 250)',
//   outline: 'none',
//   $nest: {
//     // '&:focus': {
//     //   // boxShadow: 'inset 0 0 0 2px #222299',
//     // },
//     '& + &': {
//       borderLeft: '1px solid #222299',
//     },
//     [`.${controlGroup} > &:first-child`]: {
//       borderTopLeftRadius: '4px',
//       borderBottomLeftRadius: '4px',
//     },
//     [`.${controlGroup} > &:nth-last-child(2)`]: {
//       borderTopRightRadius: '4px',
//       borderBottomRightRadius: '4px',
//     },
//   },
// })
