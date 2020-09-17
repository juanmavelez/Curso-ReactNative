import React from 'react'
import { ListOfCategory } from '../components/listOfCategory'
import { ListOfPhotoCardsWithQuery } from '../container/listOfPhotoCardsWithQuery'
import { Layout } from '../components/layout'

export const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='animales'>
      <ListOfCategory />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) =>{
  return prevProps.categoryId === props.categoryId
})
