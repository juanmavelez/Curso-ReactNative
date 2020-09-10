import React from 'react'

import { ListOfCategory } from './components/listOfCategory'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/listOfPhotocard'
import { Logo } from './components/logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCard />
  </div>
)
