import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { AppBarComponent } from "../components/AppBar/AppBar";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  cartContainer: {
    width: "60%",
    height: "80vh",
    background: "linear-gradient(65deg, #ffffff 15%, #FF8E53 90%)",
  },
  root: {
    background: "linear-gradient(45deg, #424242 35%, #FF8E53 90%)",
    margin: "20px",
  },
  media: {
    height: 280,
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 80%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 38,
    padding: "0 20px",
    "&:hover": {
      opacity: 0.8,
    },
  },
  buyList: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleColor: {
    color: "#FF8E53",
  },
  textColor: {
    color: "white",
    opacity: "0.8",
  },
  priceColor: {
    color: "#FF8E53",
  },
});

interface Product {
  inInventory: number;
  max: number;
  min: number;
  name: string;
  price: number;
  url: string;
}

export const CartPage = () => {
  const classes = useStyles();
  const { products } = useSelector((state: RootState) => state.appSlice);
  const calcTotalAmount = (products: Product[]): number => {
    const allPrices: number[] = [0];
    products.forEach((prod) => allPrices.push(prod.price));

    return allPrices.reduce((a, b) => a + b);
  };
  return (
    <>
      <AppBarComponent />
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ marginTop: "100px" }}
      >
        <Grid item xs={12} md={8} sm={10} lg={7} xl={5} >
          <List className={classes.root}>
            {products.map((product) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={product.url} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={`Price: ${product.price}`}
                />
              </ListItem>
            ))}
            <ListItem className={classes.buyList}>
              <h2 className={classes.textColor}>
                Total Price: US$ {calcTotalAmount(products)}
              </h2>
              <Button size="small" className={classes.button}>
                Buy
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};
