import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3].map(id => <PhotoCard key={id} id={id} />)}
    </ul>
  )
}
