import React from "react";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import { Route, Routes } from 'react-router-dom'
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3002/db.json').then(({ data }) =>{
      setPizzas(data.pizzas);
    });

    // fetch('http://localhost:3002/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   })
  },[]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
              <Route
                path="/"
                element={
                  <Home items={pizzas}/>
                }
              />
              <Route
                part="/cart"
                element={
                  <Cart />
                }
              />
          </Routes>
      </div>
    </div>
  );
}

export default App;
