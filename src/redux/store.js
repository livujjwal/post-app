import thunk from "redux-thunk";
import { createStore,applyMiddleware} from "redux";
import postReducer from "./reducer/postReducer";

const store = createStore(postReducer,applyMiddleware(thunk))

export default store;