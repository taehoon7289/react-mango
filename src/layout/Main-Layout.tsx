import React from 'react'
import HeaderMainLayout from 'layout/main/Header-Main-Layout'
import SidebarMainLayout from 'layout/main/Sidebar-Main-Layout'
import ContentsMainLayout from 'layout/main/Contents-Main-Layout'
import FooterMainLayout from 'layout/main/Footer-Main-layout'

type props = {
  isShow: boolean
}

function MainLayout({ isShow }: props) {
  return (
    <div>
      <HeaderMainLayout />
      <SidebarMainLayout />
      <ContentsMainLayout />
      <FooterMainLayout />
    </div>
  )
}

MainLayout.defaultProps = {
  isShow: true,
}

export default MainLayout
