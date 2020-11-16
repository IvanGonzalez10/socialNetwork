import React, { useEffect, useState, Fragment} from 'react'
import {Category} from '../Category'
import {List, Item} from './styles'
import { categories as mockCategories } from '../../../api/db.json'

const ListOfCategoriesComponent = () => {
  const [categories] = useState(mockCategories)

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
        categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)