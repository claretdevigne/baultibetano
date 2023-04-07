import React from 'react'

export default function Product( props ) {
  return (
    <div>
      <img src={ props.src } alt={ props.alt }/>
      <h3>{ props.title }</h3>
      <h4>{ props.price }</h4>
      <button onClick={() => props.addToCart() }>Añadir al carrito</button>
    </div>
  )
}
