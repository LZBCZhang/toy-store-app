import { History, createBrowserHistory } from "history";
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from "connected-react-router";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";
import { rootReducer } from "./reducers";
import { rootEpic } from "./epics";

export const initialize = () => {
    const history = createBrowserHistory();
    const store = configureStore(history);
  //  const persistor = persistStore(store);
    return {history, store};
}

const configureStore = (history: History) => {
    const epicMiddleware = createEpicMiddleware();
    const historyMiddleware = routerMiddleware(history);
    const store = createStore(
        rootReducer(history),
        compose(composeWithDevTools(applyMiddleware(historyMiddleware, epicMiddleware)))
    );
    // epicMiddleware.run(rootEpic);
    return store;
}

