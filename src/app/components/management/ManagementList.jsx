import React from 'react'

export default function ManagementList( props ) {
  return (
    <>
      <div style={{ backgroundColor: "white", width: "95%", margin: "0 auto", padding: "1rem", borderRadius: "15px 15px 0 0", height: "80vh" }}>
        <div className='d-flex' style={{ borderBottom: "1px solid #F5F7FB", color: "gray", alignItems: "center" }}>
          <div className='col header'>
            Código del producto
          </div>
          <div className='col-4'>
            Producto
          </div>
          <div className='col'>
            Status
          </div>
          <div className='col'>
            Fecha
          </div>
          <div className='col'>
            Precio
          </div>
          <div className='col'>
            Cantidad
          </div>
        </div>
        <>
          {
            (props.data) ?
              <>
                {
                  props.data.map(i => {
                    return(
                      <div key={ i.id } className='d-flex align-items-center' style={{ borderBottom: "1px solid #F5F7FB" }}>
                        <div className='col'>{ i.id }</div>
                        <div className='col-4 d-flex align-items-center'>
                          <img style={{ width: 40}} src={ i.src }></img>
                          <div className='col'>{ i.title }</div>
                        </div>
                        <div className="col">{ i.status }</div>
                        <div className='col'>{ i.date }</div>
                        <div className='col'>{ i.price + " MXN" }</div>
                        <div className='col'>{ i.quantity }</div>
                      </div>
                    )
                  })
                }
              </> :
              <div style={{ textAlign: "center" }}>NO DATA</div>
          }
        </>
      </div>
    </>
  )
}
