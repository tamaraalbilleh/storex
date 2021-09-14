import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "../store/middleware/thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./productsReducer";
import catigoryReducer from "./catigoriesReducer";
import bagReducer from "./BagReducer";
let reducers = combineReducers({
  prodcuts: productsReducer,
  catigory: catigoryReducer,
  bag: bagReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};
export default store();
