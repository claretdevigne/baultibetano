import Product from "../product/Product"

export default function Catalog ( props ) {

  return (
    <>
      <h2>Catálogo</h2>
      {
        (!props.images) ?
        <p>No images</p> :
        props.images.map((i, k) => <Product key={ k } img={ i } />)
      }
    </>
  )
}