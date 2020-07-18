import React from 'react'

type props = {
  isShow: boolean
}

function ContentsLayout({ isShow }: props) {
  return <div>contents-view</div>
}

ContentsLayout.defaultProps = {
  isShow: true,
}

export default ContentsLayout
