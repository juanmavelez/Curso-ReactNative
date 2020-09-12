import React from 'react'
import { ListOfPhotoCardComponent } from '../components/listOfPhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
  query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const ListOfPhotoCardsWithQuery = ({ categoryid }) => (
  <Query query={query} variables={{ categoryid }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        return <ListOfPhotoCardComponent data={data} />
      }
    }
  </Query>
)
