import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import noticesReducer from "./notices/notices-slice";
import friendsReducer from "./friends/friends-slice";
import newsReducer from "./news/news-slice";
import filterReducer from "./filter/filter-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: noticesReducer,
  friends: friendsReducer,
  news: newsReducer,
  filter: filterReducer,
});

export default rootReducer;
