import React from 'react'
import { ListOfCategory } from '../components/listOfCategory'
import { ListOfPhotoCardsWithQuery } from '../container/listOfPhotoCardsWithQuery'
import { Layout } from '../components/layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='animales'>
      <ListOfCategory />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </Layout>
  )
}
