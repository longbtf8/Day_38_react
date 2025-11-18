import { Route, BrowserRouter as Router, Routes } from "react-router";
import Counter from "./pages/Counter";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import CountDown from "./pages/CountDown";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/countDown" element={<CountDown />} />
            <Route
              path="/shoppingCart"
              element={
                <CartProvider>
                  <ShoppingCart />
                </CartProvider>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
