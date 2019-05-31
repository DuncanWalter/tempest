import { Dispatch, Resolve } from '@dwalter/spider-hook'
import { createReducer, settable, arraylike } from '@dwalter/create-reducer'

const [getCharCount, { set: setCharCount }] = createReducer(
  'charCount',
  1,
  settable<number>(),
)

const [getErrorCount, { set: setErrorCount }] = createReducer(
  'ErrorCount',
  0,
  settable<number>(),
)

const [getStartTime, { set: setStartTime }] = createReducer(
  'startTime',
  NaN,
  settable<number>(),
)

const [getEndTime, { set: setEndTime }] = createReducer(
  'endTime',
  NaN,
  settable<number>(),
)

const [getErrorStack, errorStackActions] = createReducer(
  'errorStack',
  [],
  arraylike<string>(),
)

function backspace() {}

function typeCharacter(char: string) {
  return (dispatch: Dispatch, resolve: Resolve) => {
    // const errorStack = resolve(getErrorStack)
    // const errorCount = resolve(getErrorCount)
    // if(errorStack.length){
    //     if(char === errorStack[errorStack.length - 1]){
    //         dispatch([
    //             setErrorCount(errorCount - 1)
    //         ])
    //     }
    // }
  }
}
