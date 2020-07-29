import React from 'react'
import HeaderPopupLayout from 'layout/popup/Header-Popup-Layout'
import ContentsPopupLayout from 'layout/popup/Contents-Popup-Layout'

type props = {
  isShow: boolean
}

function PopupLayout({ isShow }: props) {
  return (
    <div>
      <HeaderPopupLayout />
      <ContentsPopupLayout />
    </div>
  )
}

PopupLayout.defaultProps = {
  isShow: true,
}

export default PopupLayout
