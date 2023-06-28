import { Grid, makeStyles } from "@material-ui/core"
import { AppBarComponent } from "../components/AppBar/AppBar"

const useStyles = makeStyles({
    cartContainer: {
        width: '60%',
        height: '80vh',
        background: 'linear-gradient(65deg, #ffffff 15%, #FF8E53 90%)'
    },
    root: {
      // backgroundColor: '#424242',
      background: 'linear-gradient(65deg, #424242 15%, #FF8E53 90%)',
      margin: '20px',
    
    },
    media: {
      height: 280,
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 80%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 38,
      padding: '0 20px',
      "&:hover": {
        opacity: 0.8
      }
    },
    titleColor: {
      color: '#FF8E53'
    },
    textColor: {
      color: 'white',
      opacity: '0.8'
    },
    priceColor: {
      color: '#FF8E53'
    }
  });

export const CartPage = () => {

    const classes = useStyles()

  return (
    <>
        <AppBarComponent />
        <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ marginTop: "100px" }}
      >
        <Grid item justifyContent="center"
            alignContent="center" className={classes.cartContainer}>

        </Grid>
      </Grid>
    </>
  )
}
