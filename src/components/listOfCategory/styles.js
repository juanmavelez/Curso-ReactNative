import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100% ;
  ${props => props.fixed && css`
      ${fadeIn({ time: '1s' })}
      background:#fff;
      border-radius: 6rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 40rem;
      padding: .5rem;
      position: fixed;
      right: 0;
      top: -2rem;
      transform: scale(.5);
      z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 .8rem;
`
