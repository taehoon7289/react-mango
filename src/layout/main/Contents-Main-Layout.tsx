import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import MainRoute from 'router/main/route'

type props = {
  isShow: boolean
}

function ContentsMainLayout({ isShow }: props) {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={'/'}>/</Link>
          </li>
          <li>
            <Link to={'/weather'}>/weather</Link>
          </li>
          <li>
            <Link to={'/board'}>/board</Link>
          </li>
        </ul>
        <MainRoute />
      </BrowserRouter>
    </div>
  )
}

ContentsMainLayout.defaultProps = {
  isShow: true,
}

export default ContentsMainLayout
