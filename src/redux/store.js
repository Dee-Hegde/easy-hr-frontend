import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import loginReducer from "./auth/loginReducer";
import userListReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  userList: userListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
