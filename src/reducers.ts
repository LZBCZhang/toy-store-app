import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';
import { GlobalState } from "./globalState";

const persistConfig = {
  key: "toy-store-app",
  storage: sessionStorage
};

const appReducer = (history: History) => combineReducers<GlobalState>(
{
    router: connectRouter(history)
}
);

export const rootReducer = (history: History) => persistReducer(persistConfig, appReducer(history));