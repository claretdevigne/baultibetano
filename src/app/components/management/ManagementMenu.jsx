import React from 'react'

export default function ManagementMenu( props ) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "0 2rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>In stock</span>
          <input onChange={ (e) => props.handleChange(e) } type='search' />
          <span>status</span>
          <select onChange={ e => props.handleSelect(e) }>
            <option value="ALL" >ALL</option>
            <option value="DISPONIBLE">Disponible</option>
            <option value="VENDIDO">Vendido</option>
          </select>
        </div>
        <button>Agregar</button>
    </div>
  )
}
