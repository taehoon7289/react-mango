import React from 'react'
import Meta from 'common/object/Meta'
import ApiBoard from 'common/api/ApiBoard'

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
      text: '인덱스 자리2',
    }
    this.findBoardAll = this.findBoardAll.bind(this)
  }

  async componentDidMount() {
    console.log('componentDidMount!!!')
    const params = {}
    console.log('api :: ', await ApiBoard.getListOfBoard(params))
  }

  findBoardAll() {
    console.log('findBoardAll')
  }

  render() {
    return <div>{this.state.text}</div>
  }
}

export default Index
