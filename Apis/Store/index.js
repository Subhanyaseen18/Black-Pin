import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {LoginApi} from '../CallApis/index';
import userReducer from './Slice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    [LoginApi.reducerPath]: LoginApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(LoginApi.middleware),
});
setupListeners(store.dispatch);
