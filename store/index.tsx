import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "../store/middleware/thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./productsReducer";
import catigoryReducer from "./catigoriesReducer";
let reducers = combineReducers({
  prodcuts: productsReducer,
  catigory: catigoryReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};
export default store();
