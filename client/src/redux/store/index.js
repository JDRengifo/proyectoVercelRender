import { createStore, applyMiddleware, compose } from "redux";
import  thunk  from "redux-thunk";
import rootReducer from "../reducer";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;