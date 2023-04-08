import React from 'react'

export default function ManagementMenu( props ) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "0 2rem", height: "10vh", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{ width: "50%" }}>In stock</span>
          <input style={{ outline: "none" }} className='form-control' onChange={ (e) => props.handleChange(e) } type='search' />
          <span>status</span>
          <select className="form-select" onChange={ e => props.handleSelect(e) }>
            <option value="ALL" >ALL</option>
            <option value="DISPONIBLE">Disponible</option>
            <option value="VENDIDO">Vendido</option>
          </select>
        </div>
        <button className='btn btn-success'>Agregar</button>
    </div>
  )
}
