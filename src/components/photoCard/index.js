import React from 'react'
import { ImWrapper, Img, Button } from './styles.js'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImWrapper>
          <Img src={src} />
        </ImWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
