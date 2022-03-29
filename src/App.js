import React from "react";
import {Route, Routes} from 'react-router-dom'
import axios from "axios";
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    });
    // fetch('http://localhost:3002/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   })
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route part="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </div>
  );
}

// class App extends React.Component{
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) =>{
//       this.props.dispatch(setPizzas(data.pizzas));
//     });
//   }
//
//   render() {
//     console.log(this.props)
//     return(
//       <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home items={this.props.items}/>
//             }
//           />
//           <Route
//             part="/cart"
//             element={
//               <Cart />
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     items: state.pizzas.items,
//   }
// }
//
// export default connect(mapStateToProps)(App);

export default App;
