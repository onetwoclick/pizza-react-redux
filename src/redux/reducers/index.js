import {combineReducers} from "redux";
import filtersReducer from "./filter";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;