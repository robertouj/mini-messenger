import React, { useState, useEffect } from "react";
import Message from "../Message/Message.js";

function MessageList() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://twitterclonewbs.herokuapp.com/messages")
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setMessages(json);
      })
      .catch((e) => console.log("Request failed: " + e));
  }, []);

  return (messages.map((message, index) => 
    <Message key={index} message={message} />
  ));
}

export default MessageList;
