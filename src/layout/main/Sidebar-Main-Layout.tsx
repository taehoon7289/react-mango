import React from 'react'

type props = {
  title: string
  isShow: boolean
}

function SidebarMainLayout({ title }: props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

SidebarMainLayout.defaultProps = {
  title: '출근앱 - 사이드바',
  isShow: true,
}

export default SidebarMainLayout
