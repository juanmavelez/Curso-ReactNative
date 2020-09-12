import React from 'react'

import { ListOfCategory } from './components/listOfCategory'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsWithQuery } from './container/listOfPhotoCardsWithQuery'
import { Logo } from './components/logo'
import { PhotoCardWithQuery } from './container/photoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategory />
            <ListOfPhotoCardsWithQuery id={1} />
          </>
      }

    </div>
  )
}
