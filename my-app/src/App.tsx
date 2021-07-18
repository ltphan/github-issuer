import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"

import Issues from "./screens/Issues";
import Search from './screens/Search';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Search} />
        <Route path='/issues' exact component={Issues} />
      </Switch>
    </Router>
  );
}

export default App;
