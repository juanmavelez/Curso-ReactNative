import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../category'
import { List, Item } from './styles'

export const ListOfCategory = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixd] = useState(false)

  useEffect(function () { // se ejecuta cada vez que se renderiza el componente
    window.fetch('https://petgram-juanma-api-3wn26sb41.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () { // se ejecuta cada vez que se renderiza el componente
    const onScroll = e => {
      const newShowFixed = window.scrollY < 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
  }, [])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true)}
    </>

  )
}
