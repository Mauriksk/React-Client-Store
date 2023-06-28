import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
  );
}

export default App;
