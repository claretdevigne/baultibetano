import React from 'react'
import Catalog from './components/catalog/Catalog'
import { data } from '../data'

export default function App() {

  return (
    <Catalog data={ data }/>
  )
}