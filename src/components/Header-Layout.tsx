import React from 'react'

type props = {
  title: string
  isShow: boolean
}

function HeaderLayout({ title }: props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

HeaderLayout.defaultProps = {
  title: '출근앱',
  isShow: true,
}

export default HeaderLayout
