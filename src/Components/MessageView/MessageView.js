import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroupItemHeading } from "reactstrap";

function MessageView() {
  const [message, setMessage] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  const getUser = (id) => {
    fetch(`https://twitterclonewbs.herokuapp.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json[0]);
        console.log(json);     
      })
      .catch((e) => console.log("Request failed: " + e));
  };
  // http://localhost:3000/message/6078633c8a15401488b8ef01

  useEffect(() => {
    fetch(`https://twitterclonewbs.herokuapp.com/messages/${id}`)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setMessage(json[0]);
        getUser(json[0].user);
        setIsLoading(false);
        
      })
      .catch((e) => console.log("Request failed: " + e));
  }, []);

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          <span>not fake text{user.name}</span>
          <a href={`/message/${message._id}`}>Fake text...</a>
          {message.content}
          <img src={message.image} alt="Fakepicture" />
          {/*message.user?.name*/}
          {message.createdAt}
        </div>
      )}
    </div>
  );
}

export default MessageView;
/* <span>User: {user.name}</span> */
