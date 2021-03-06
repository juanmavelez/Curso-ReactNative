import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  border-radius: .5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%
  }
`

export const Grid = styled.div`
  padding-top:3rem;
`
export const Image = styled.img`
objet-fit: cover;
height: 100%;
width: 100%;
positio: absolute;
`
