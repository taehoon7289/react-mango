import React from 'react'

type props = {
  title: string
  isShow: boolean
}

function HeaderPopupLayout({ title }: props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

HeaderPopupLayout.defaultProps = {
  title: '출근앱',
  isShow: true,
}

export default HeaderPopupLayout
