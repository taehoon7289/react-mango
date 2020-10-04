class Meta {
  name: string
  depth: number
  desc?: string
  constructor(meta: Meta) {
    this.name = meta.name
    this.depth = meta.depth
    this.desc = meta.desc
  }
}

export default Meta
