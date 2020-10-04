import React from 'react'
import Meta from 'common/config/Meta'
import ApiBoard from 'common/api/ApiBoard'
import Button from '@material-ui/core/Button'

type typeProps = {
  meta: Meta
}

type typeState = {
  text: string
  count: number
}

class Index extends React.Component<typeProps, typeState> {
  constructor(props: typeProps) {
    super(props)
    this.state = {
      text: '인덱스 자리2',
      count: 0,
    }
  }
  async componentDidMount() {
    console.log('api :: ', await ApiBoard.getListOfBoard())
  }

  render() {
    return (
      <div>
        {this.state.text}
        <Button variant="contained" color="primary" onClick={this.findBoardAll}>
          {this.state.count}
        </Button>
      </div>
    )
  }

  findBoardAll = () => {
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this)
  }
}

export default Index
