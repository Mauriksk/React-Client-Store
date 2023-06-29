import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, takeOutToCart } from "../../redux/appSlice";
import { RootState } from "../../redux/store";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(65deg, #424242 15%, #FF8E53 90%)",
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

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
  takeOutToCart: (product: Product) => void;
}

export const CardComponent: FC<Props> = ({
  product,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const convertUperCase = (text: string) => {
    const cutString = text.slice(1);
    const firstLetter = text.at(0)?.toUpperCase();
    return firstLetter + cutString;
  };

  const { products } = useSelector((state: RootState) => state.appSlice);

  const isAdding = (name:string):Boolean => {
    const matchName = products.filter(product => product.name === name)
    return matchName.length !== 0
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.url}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.titleColor}
          >
            {convertUperCase(product.name)}{" "}
            <Typography className={classes.priceColor}>
              Price: US$ {product.price}
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            className={classes.textColor}
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            isAdding(product.name) ? dispatch(takeOutToCart(product)) : dispatch(addToCart(product));
          }}
          size="small"
          className={classes.button}
        >
          {isAdding(product.name) ? "Take Out" : "Add to cart"}
        </Button>
        <Button size="small" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
