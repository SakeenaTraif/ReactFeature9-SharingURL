// Styling
import {Description,GlobalStyle,ShopImage,ThemeButton,Title,} from "./styles";
import React, { useState } from "react";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Data
import products from "./products";
//react
import {Route, Switch} from "react-router";
import {Helmet} from "react-helmet";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== +productId
    );
    setProducts(updatedProducts);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

    
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
     
      <Helmet><title>Cookie's Shop</title></Helmet>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
      <Route path="/products/:productSlug">
        <ProductDetail
        products={_products}
        deleteProduct={deleteProduct}
      />
      </Route>

      <Route path="/products">
        <ProductList
        products={_products}
        deleteProduct={deleteProduct}
      />
      </Route>

      <Route exact path="/">
        <Home />
        </Route>
    </Switch>
  </ThemeProvider>
  );
}

export default App;
