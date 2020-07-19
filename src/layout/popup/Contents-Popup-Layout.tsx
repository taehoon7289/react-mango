import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import Index from 'components'
import WeatherIndex from 'components/weather';

type props = {
  isShow: boolean
}

function ContentsMainLayout({ isShow }: props) {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to={'/'}>/</Link></li>
        <li><Link to={'/weather'}>/weather</Link></li>
      </ul>
      <Switch>
        <Route exact path={'/'} component={Index}></Route>
        <Route path={'/weather'} component={WeatherIndex}></Route>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

ContentsMainLayout.defaultProps = {
  isShow: true,
}

export default ContentsMainLayout
