import styled from 'styled-components'

export const Button = styled.button`
background: rgb(250, 145, 10);
border-radius: 3rem;
color: #fff;
height: 3.2rem;
display: block;
width: 50%;
margin: 0 auto;
text-align: center;
&[disabled]{
  opacity: .3;
}
`