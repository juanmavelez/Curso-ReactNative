import React from 'react'
import { FavsWithQuery } from '../container/getFavorites'
import { Layout } from '../components/layout'

export const Favs = () => (
  <>
    <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos' />
    <h1>Favs</h1>
    <FavsWithQuery />
  </>
)
