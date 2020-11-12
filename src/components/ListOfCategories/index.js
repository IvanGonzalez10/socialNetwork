import React, { useEffect, useState, Fragment} from 'react'
import {Category} from '../Category'
import {List, Item} from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)

  const [showFixed, setShowFixed] = useState (false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200 
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.addEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
)
  return (
    <>
    {renderList()}
    {showFixed && renderList(true)}
    </>
  )
}