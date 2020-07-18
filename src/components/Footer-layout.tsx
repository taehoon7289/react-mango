import React from 'react'

type props = {
  isShow: boolean
}

function FooterLayout({ isShow }: props) {
  return <div>footer layout</div>
}

FooterLayout.defaultProps = {
  isShow: true,
}

export default FooterLayout
