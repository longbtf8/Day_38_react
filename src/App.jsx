import { Route, BrowserRouter as Router, Routes } from "react-router";
import Counter from "./pages/Counter";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import CountDown from "./pages/CountDown";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/countDown" element={<CountDown />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
