import React, {useEffect} from "react";
import indexRoutes from "./routes/";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/Store";
import { History } from "./jwt/_helpers";
import { PrivateRoute } from "./routes/PrivateRoutes";
import BlankLayout from "./layouts/BlankLayout";
import { SocketIO } from "./components/socketio/SocketIO";

const App = () => {
  //const [currentUser, SetcurrentUser] = useState(null);

    useEffect(() => {
        const socket = SocketIO.GetConnection();
        return () => socket.disconnect();
    },[]);

  return (
      <Provider store={configureStore()}>
        <Router history={History}>
          <Switch>
            <Route exact path="/authentication/login" component={BlankLayout} />

            {indexRoutes.map((prop, key) => {
              return (
                  <PrivateRoute
                      path={prop.path}
                      key={key}
                      component={prop.component}
                  />
              );
            })}


          </Switch>
        </Router>
      </Provider>
  );
};
export default App;
