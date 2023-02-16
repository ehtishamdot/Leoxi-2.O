import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";
import ThemeProvider from "./store/ThemeProvider";
import Layout from "./components/Layout/Layout";

ReactDOM.render(
  <Layout>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </Layout>,
  document.getElementById("root")
);
