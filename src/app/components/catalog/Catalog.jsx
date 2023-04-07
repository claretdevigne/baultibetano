import Product from "../product/Product"

export default function Catalog ( props ) {

  const styles = {
    h2: {
      fontSize: "3rem",
      textAlign: "center",
      marginTop: "2rem"
    },

    productContainer: {
      margin: "2rem 10%",
      display: "flex",
      flexWrap: "wrap",
      gap: "5%",
      justifyContent: "center"
    }
  }

  return (
    <>
      <h2 style={ styles.h2 }>Catálogo</h2>
      {
        (!props.data) ?
        <p>No products</p> :
        <div style={ styles.productContainer }>
          {
            props.data.map((i, k) => <Product 
              key={ k } 
              src={ i.src } 
              alt={ i.alt } 
              title={ i.title }
              price={ i.price + " MXN" }
            />) 
          }
        </div>
      }
    </>
  )
}