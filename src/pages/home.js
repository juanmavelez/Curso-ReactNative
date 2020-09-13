import React from 'react'
import { ListOfCategory } from '../components/listOfCategory'
import { ListOfPhotoCardsWithQuery } from '../container/listOfPhotoCardsWithQuery'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  )
}
