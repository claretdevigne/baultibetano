import React, { useState, useEffect } from 'react'
import ManagementList from './ManagementList'
import ManagementMenu from './ManagementMenu'

export default function Managment( props ) {

  const [buscador, setBuscador] = useState("")
  const [selection, setSelection] = useState("ALL")
  const [data, setData] = useState()

  const handleChange = (e) => {
    e.preventDefault()
    setBuscador(e.target.value)
  } 

  const handleSelect = (e) => {
    e.preventDefault()
    setSelection(e.target.value)
  }

  useEffect(() => {
    if (buscador.length > 0) {
      if (selection !== "ALL") {
        const filter = props.data.filter(i => i.title.toLowerCase().includes(buscador.toLowerCase()) && i.status.toUpperCase().includes(selection))
        setData(filter)
      } else {
        const filter = props.data.filter(i => i.title.toLowerCase().includes(buscador.toLowerCase()))
        setData(filter)
      }
    } else {
      if (selection !== "ALL") {
        const filter = props.data.filter(i => i.status.toUpperCase().includes(selection))
        setData(filter)
      } else {
        setData(props.data)
      }
    }
  }, [props.data, buscador, selection])

  return (
    <>
      <h2>Management</h2>
      <ManagementMenu handleChange={ handleChange } handleSelect={ handleSelect }/>
      <ManagementList data={ data }/>
    </>
  )
}
