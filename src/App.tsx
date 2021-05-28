import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import { MerchantsTable } from "./components/merchants-table/table";

import { styles } from "./styles";

function App() {
  return (
    <Router>
      <div css={styles.app}>
        <Menu />
        <Switch>
          <Route exact path="/">
            <div>HOME</div>
          </Route>
          <Route exact path="/merchants">
            <MerchantsTable />
          </Route>
          <Route exact path="/shop">
            <div>SHOP</div>
          </Route>
          <Route exact path="/settings">
            <div>SETTINGS</div>
          </Route>
          <Route exact path="/profile">
            <div>PROFILE</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
