import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import MessageView from "../MessageView/MessageView";
import MessageList from "../MessageList/MessageList";
import RightMenu from "../RightMenu/RightMenu";

function Home() {
  return (
    <div>
      <label>Search By Name</label>
      <Switch>
        <Route path="/:userName/message/:id">
          <SearchBar />
          <LeftMenu />
          <MessageView />
          <RightMenu />
        </Route>
        <Route path="/:userName">
          <SearchBar />
          <LeftMenu />
          <MessageList />
          <RightMenu />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
