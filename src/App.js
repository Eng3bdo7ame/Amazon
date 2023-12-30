import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componant/header/Header.jsx";
import Product from "./componant/product/Product";
import Login from "./componant/login_page/login";
import Card from "./componant/card/Card";
import Pyment from "./componant/pyment/pyment.jsx";
import { useStateValue } from "./componant/Redux_Files/StateProvider.jsx";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route index path="/" element={<Product />} />{" "}
        <Route path="/card" element={<Card />} />{" "}
        <Route path="/pyment" element={<Pyment />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
