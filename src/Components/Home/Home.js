import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import MessageView from "../MessageView/MessageView";
import MessageList from "../MessageList/MessageList";
import RightMenu from "../RightMenu/RightMenu";

function Home() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <label>Search By Name</label>
      <SearchBar newitems={items}/>
      <LeftMenu />
      <Switch>
        {/*<Route path="/:userName/message/:id">*/}
        <Route path="/message/:id">
          Messageview
          <MessageView />
        </Route>
        <Route path="/">
          Masagge
          <MessageList />
        </Route>
      </Switch>
      <RightMenu />
    </div>
  );
}

export default Home;
