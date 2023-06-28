import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import "./AppBar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(200),
    },
    menuColor: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 80%)",
    },
  })
);

export const AppBarComponent = () => {
  const classes = useStyles();

  const { products } = useSelector((state: RootState) => state.appSlice);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuColor}>
        <Toolbar variant="regular">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              style={{ minWidth: "150px", color: "white" }}
              variant="h6"
            >
              Whiskey Shop
            </Typography>
          </Link>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Link to="/cart" style={{ width: "100px", textDecoration: "none" }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ width: "100px", height: "50px" }}
              >
                <Badge
                  badgeContent={products.length}
                  style={{ color: "white" }}
                >
                  <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
