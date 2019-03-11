import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { indexReducer } from "./reducers/index";

export default createStore(indexReducer, applyMiddleware(thunk));
