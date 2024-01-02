import { API } from "@/Services/base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { homeReducers, themeReducers } from "./reducers";
import { WEATHER_API } from "@/Services/weather/base";
import { farmReducers} from "./reducers/farm";
import { profileReducers } from "./reducers/profile";
// import {authReducer} from './reducers/auth';
const reducers = combineReducers({
  //api: API.reducer,
  //api: WEATHER_API.reducer,
  farm: farmReducers,
  profile: profileReducers,
  [WEATHER_API.reducerPath]: WEATHER_API.reducer,
  // auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(WEATHER_API.middleware);

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require("redux-flipper").default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
