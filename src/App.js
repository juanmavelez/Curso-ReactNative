import React from 'react'

import { ListOfCategory } from './components/listOfCategory'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './container/listOfPhotoCards'
import { Logo } from './components/logo'
import { PhotoCardWithQuery } from './container/photoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategory />
            <ListOfPhotoCard categoryId={1} />
          </>
      }

    </div>
  )
}
