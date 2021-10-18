import * as React from 'react';
import {Store} from 'redux';
import { Persistor } from 'redux-persist';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { GlobalState } from './globalState';
import Loading from './components/Loading';
import { Route, Switch } from 'react-router';
import WelcomePage from './components/WelcomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {
  store: Store<GlobalState>;
  history: any;
 // persistor: Persistor;
}


const App: React.FC<Props> = ({store, history}) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
        <React.StrictMode>
          <BrowserRouter>
          <ConnectedRouter history={history}> 
              <Switch>
                <Route exact={true} path= '/' component={WelcomePage} />
              </Switch>
            </ConnectedRouter>
          </BrowserRouter>
        </React.StrictMode>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
