class Color extends String {
  // color: {
  //   r: number
  //   g: number
  //   b: number
  //   a: number
  // }

  constructor(r: number, g: number, b: number, a = 1) {
    super(`rgba(${r}, ${g}, ${b}, ${a})`)
    this.color = { r, g, b, a }
  }

  alpha(a: number) {
    if (this.color.a === a) return this
    const { r, g, b } = this.color
    return new Color(r, g, b, a)
  }
}

const colorPattern = /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/

export function createColor(hashColor: string): ColorType {
  const match = colorPattern.exec(hashColor)
  if (match !== null) {
    const [, r16, g16, b16] = match

    const r10 = Number.parseInt(r16, 16)
    const g10 = Number.parseInt(g16, 16)
    const b10 = Number.parseInt(b16, 16)

    const color = new String(`rgba(${r10}, ${g10}, ${b10}, ${1})`) as ColorType
    // color.alpha = (a: number)=> {
    //   if (this.color.a === a) return this
    //   const { r, g, b } = this.color
    //   return new Color(r, g, b, a)
    // }

    Object.defineProperty(color, 'foo', { value: 'bar' })
    console.log(color)

    return new Color(r10, g10, b10) as ColorType
  } else {
    console.warn(
      `Warning: color ${hashColor} was not recognized as a color string.`,
    )
    return new Color(0, 0, 0) as ColorType
  }
}

type ColorType = Color & string

export { ColorType as Color }
