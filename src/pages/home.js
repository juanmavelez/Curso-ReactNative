import React from 'react'
import { ListOfCategory } from '../components/listOfCategory'
import { ListOfPhotoCardsWithQuery } from '../container/listOfPhotoCardsWithQuery'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  )
}
