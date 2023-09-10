import userReducer from './userReducer';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index'
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const rootReducer = combineReducers({
  userReducer: userReducer,
});

const persistConfig = {
  key: 'finiksroot',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, logger],
});

export default store;
export const persistor = persistStore(store);
