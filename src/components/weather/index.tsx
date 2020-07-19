import React from 'react'
import { Route } from 'react-router'

type props = {
  isShow: boolean
}

function WeatherIndex({ isShow }: props) {
  return (
    <div>
      WeatherIndex
    </div>
  )
}

WeatherIndex.defaultProps = {
  isShow: true,
}

export default WeatherIndex
