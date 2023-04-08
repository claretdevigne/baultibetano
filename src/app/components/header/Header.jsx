export default function Header () {

  const styles = {
    headerContainer: {
      backgroundColor: "#C7A33A",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "0 2rem",
    },

    logosContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },

    logo: {
      width: "60%"
    },

    title: {
      width: "120%"
    },

    menuContainer: { 
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#DEC535",
      width: "100vw",
      gap: "1rem"
    },
    
    text: {
      color: "white",
      fontWeight: "600",
      padding: "0.5rem 0",
      cursor: "pointer"
    }
  }

  return (
    <div style={ styles.headerContainer }>
        <div style={ styles.logosContainer }>
          <div className="col-1">
            <img style={ styles.logo } src="https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/logo.png" alt="Logo" />
          </div>
          <div className="col-1">
            <img style={ styles.title } src="https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/title.png" alt="Baúl Tibetano" />
          </div>
          <div className="col-1"></div>
        </div>
        <div style={ styles.menuContainer }>
          <div style={ styles.text }>Inicio</div>
          <div style={ styles.text }>Catálogo</div>
        </div>
    </div>
  )
 }