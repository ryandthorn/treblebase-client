import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { indexReducer } from "./indexReducer";

export default createStore(indexReducer, applyMiddleware(thunk));
