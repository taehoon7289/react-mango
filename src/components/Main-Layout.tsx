import React from 'react'
import HeaderLayout from './Header-Layout'
import ContentsLayout from './Contents-Layout'
import FooterLayout from './Footer-layout'

type props = {
  isShow: boolean
}

function MainLayout({ isShow }: props) {
  return (
    <div>
      <HeaderLayout />
      <ContentsLayout />
      <FooterLayout />
    </div>
  )
}

MainLayout.defaultProps = {
  isShow: true,
}

export default MainLayout
