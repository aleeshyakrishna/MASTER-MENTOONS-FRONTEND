import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducer';
 
const store =createStore(rootReducer);

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import userData from "./userReducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     userData: userData,
//   })
// );

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistore = persistStore(store);

// export { store, persistore };