import "./App.css";
import MessageList from "./Components/MessageList/MessageList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <MessageList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
