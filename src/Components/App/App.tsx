import { HashRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { PlayPage } from "../Play/Play";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/play/:path">
            <PlayPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
