import React from 'react'

type props = {
  isShow: boolean
}

function FooterMainLayout({ isShow }: props) {
  return <div>footer layout</div>
}

FooterMainLayout.defaultProps = {
  isShow: true,
}

export default FooterMainLayout
