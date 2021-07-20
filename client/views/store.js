import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  companyListReducer,
  companyListOneReducer,
  companyListOne1Reducer,
} from './reducer/companyReducer'
import {
  userSigninReducer,
  userSignupReducer,
  userListOneReducer,
  userUpdateReducer
}
  from './reducer/userReducer'

const initialState = {
  userSignin: {
    userInfo:
      typeof window !== "undefined"
        ? localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null
        : null,
  }
};
const reducer = combineReducers({
  userSignin:userSigninReducer,
  userSignup:userSignupReducer,
  userListOne:userListOneReducer,
  userUpdate:userUpdateReducer,
  companyList: companyListReducer,
  companyListOne: companyListOneReducer,
  companyListOne1: companyListOne1Reducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;