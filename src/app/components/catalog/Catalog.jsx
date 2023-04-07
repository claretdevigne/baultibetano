import Product from "../product/Product"

export default function Catalog ( props ) {

  return (
    <>
      <h2>Catálogo</h2>
      {
        (!props.data) ?
        <p>No images</p> :
        props.data.map((i, k) => <Product 
          key={ k } 
          src={ i.src } 
          alt={ i.alt } 
          title={ i.title }
          price={ i.price }
        />)
      }
    </>
  )
}