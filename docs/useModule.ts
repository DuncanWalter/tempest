import { useState } from 'react'

const empty = {}

export function useModule<T extends { [prop: string]: any }>(
  modulePromise: Promise<T>,
): [true, T] | [false, { [K in keyof T]: undefined }] {
  const [module, setModule] = useState(empty)

  modulePromise.then(setModule)

  return [module !== empty, module] as any
}
