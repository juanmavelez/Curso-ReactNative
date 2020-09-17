import React, { useContext, Suspense } from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Redirect, Router } from '@reach/router'

import { Detail } from './pages/detail'
import { Home } from './pages/home'
import { User } from './pages/user'
/* import { Favs } from './pages/favs' */
import { NotRegisterUser } from './pages/notRegisterUser'
import { NotFound } from './pages/notFound'
import { NavBar } from './components/navBar'
import { Logo } from './components/logo'
import { Context } from './context'

const Favs = React.lazy(() => import('./pages/favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div>Hola</div>}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login/' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
