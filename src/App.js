import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage'


class App extends Component {
  render() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
  }

}
export default App;
