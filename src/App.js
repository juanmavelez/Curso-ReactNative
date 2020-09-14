import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'

import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { User } from './pages/user'
import { Favs } from './pages/favs'
import { NotRegisterUser } from './pages/notRegisterUser'

import { NavBar } from './components/navBar'
import { Logo } from './components/logo'
import Context from './context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? (<Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>)
              : (<Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>)
        }
      </Context.Consumer>

      <NavBar />
    </div>
  )
}
