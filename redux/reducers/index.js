
import {persistCombineReducers} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const initialState = {
  isLogin: false,
  token: null,
  fbToken: null,
  userInfo: {},
  sabteZemanatInit: {},
  sabteZemanatData: {},
  sabteZemanatUser: {},
  sabteZemanatJob: [],
  sabteZemanatImage:[]
  
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.token,
      };
    case 'FBTOKEN':
      return {...state, fbToken: action.payload};

    default:
      return state;
  }
}

function init(state = initialState, action) {
  switch (action.type) {
    case 'START_APP':

    case 'INIT':
      return {
        ...state,
        userInfo: action.userInfo,
      };

    default:
      return state;
  }
}

function params(state = initialState, action) {
  switch (action.type) {
    case 'SYMBOLS':
      return {...state, symbols: action.payload};
    case 'SABTE_ZEMANAT':
      return {
        ...state,
        sabteZemanatInit: action.sabteZemanatInit,
        sabteZemanatUser: action.sabteZemanatUser,
        sabteZemanatJob: action.sabteZemanatJob,
        sabteZemanatImage: action.sabteZemanatImage,
      };
    case 'SABTE_ZEMANAT_DATA':
      return {
        ...state,

        sabteZemanatData: action.sabteZemanatData,
      };
  

    default:
      return state;
  }
}

function persistedParams(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const persistConfig = {
  key: 'sandoghhabib',
  storage: storage,
  whitelist: ['auth',"init", 'persistedParams'],
};
const AppReducer = persistCombineReducers(persistConfig, {
  init,
  auth,
  params,
  persistedParams,
});

export default AppReducer;
