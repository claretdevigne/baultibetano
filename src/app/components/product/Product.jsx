import React from 'react'

export default function Product( props ) {

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "20%"
    },

    btn: {
      backgroundColor: "deeppink",
      borderColor: "deeppink" 
    },

    h4: {
      color: "deeppink",
      fontSize: "1.5rem",
      alignSelf: "center"
    }
  }

  return (
    <div style={ styles.container }>
        <img style={ styles.image } src={ props.src } alt={ props.alt }/>
        <h3>{ props.title }</h3>
        <h4 style={ styles.h4 } >{ props.price }</h4>
        <button style={ styles.btn } className='btn btn-primary' onClick={() => props.addToCart() }>Añadir al carrito</button>
    </div>
  )
}
