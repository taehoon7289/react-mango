import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from 'pages/'
import WeatherIndex from 'pages/weather'
import BoardIndex from 'pages/board'

function MainRoute() {
  const metaIndex = { name: 'index', depth: 1 }
  const metaWeatherIndex = { name: 'weather-index', depth: 1 }
  const metaBoardIndex = { name: 'board-index', depth: 1 }
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Index meta={metaIndex} />}></Route>
      <Route
        path={'/weather'}
        render={() => <WeatherIndex meta={metaWeatherIndex} />}
      ></Route>
      <Route
        path={'/board'}
        render={() => <BoardIndex meta={metaBoardIndex} />}
      ></Route>
      <Redirect path="*" to="/" />
    </Switch>
  )
}

export default MainRoute
