import React from 'react'

type props = {
  title: string
  isShow: boolean
}

function HeaderMainLayout({ title }: props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

HeaderMainLayout.defaultProps = {
  title: '출근앱',
  isShow: true,
}

export default HeaderMainLayout
