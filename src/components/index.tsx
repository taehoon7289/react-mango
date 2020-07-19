import React from 'react'
import { Route } from 'react-router'

type props = {
  isShow: boolean
}

function Index({ isShow }: props) {
  return (
    <div>
      index
    </div>
  )
}

Index.defaultProps = {
  isShow: true,
}

export default Index
