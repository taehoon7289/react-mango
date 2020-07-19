class Meta {
  name: string
  depth: number
  constructor(meta: Meta) {
    this.name = meta.name
    this.depth = meta.depth
  }
}

export default Meta
