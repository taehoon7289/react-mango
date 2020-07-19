import React from 'react'
import Meta from 'common/object/Meta'

type typeProps = {
  meta: Meta
}

type typeState = {
  text: string
}

class Index extends React.Component<typeProps, typeState> {
  constructor(props: typeProps) {
    super(props)
    this.state = {
      text: '인덱스 자리2'
    }
  }

  render() {
    console.log('메타정보', this.props)
    return <div>{this.state.text}</div>
  }
}

export default Index
