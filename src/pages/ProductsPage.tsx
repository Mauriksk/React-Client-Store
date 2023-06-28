import { useProductPage } from "./hooks/useProductPage";
import { CardComponent } from "../components/CardComponent/CardComponent";
import "./css/ProductsPage.css";

import { Grid } from "@material-ui/core";
import { AppBarComponent } from "../components/AppBar/AppBar";

export const ProductsPage = () => {
  const { products, addToCart, takeOutToCart } = useProductPage();

  return (
    <>
      <AppBarComponent />
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ marginTop: "50px" }}
      >
        {products?.map((product) => (
          <Grid
            justifyContent="center"
            alignContent="center"
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
          >
            <CardComponent
              product={product}
              addToCart={addToCart}
              takeOutToCart={takeOutToCart}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
