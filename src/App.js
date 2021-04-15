import "./App.css";
import MessageList from "./Components/MessageList/MessageList";
import { Switch, Route } from "react-router-dom";
import Message from './Components/Message/Message'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <MessageList />
        </Route>
        <Route>
        <Message />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
