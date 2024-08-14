import {configureStore} from "@reduxjs/toolkit";
import {api} from "../api/index.jsx";
import {reducer as UserReducer} from "../slice/User-slice.jsx";

const store = configureStore({
  reducer: {
    user: UserReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware)
})

export default store;