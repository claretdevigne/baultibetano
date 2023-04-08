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

  const handleFilters = () => {
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
  }

  useEffect(() => {
    handleFilters()
  }, [props.data, buscador, selection])

  return (
    <div style={{ backgroundColor: "#C7A33A", minHeight: "100vh" }}>
      <div className='d-flex align-items-center justify-content-between' style={{ height: "10vh", width: "95%", margin: "0 auto" }}>
        <img style={{ width: 120 }} src="https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/title.png" alt="Baúl Tibetano" />
        <h2>Control de inventario</h2>
        <div></div>
      </div>
      <ManagementMenu handleChange={ handleChange } handleSelect={ handleSelect }/>
      <ManagementList data={ data }/>
    </div>
  )
}