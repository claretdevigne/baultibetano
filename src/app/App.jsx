import React, { useEffect, useState } from 'react'
import Catalog from './components/catalog/Catalog'
import Connect from './database/database'
import Header from './components/header/Header'
import Managment from './components/management/Managment'

export default function App() {

  const [data, setData] = useState()
  
  const getData = () => {
    const database = new Connect()
    database._database.scan({ TableName: "baultibetano-product-data"}, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        setData(data.Items)
      }
    })
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
      <>
        <Managment data={ data }/>
        {/* <Header />
        <Catalog data={ data }/> */}
      </>
  )
}