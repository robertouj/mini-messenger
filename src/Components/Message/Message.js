
import React from 'react'




function Message({message}) {
    console.log(message);
    

    //const {id, image, user,;
    return (
        <div>            
            <a href={`/message/${message._id}`} >Fake text...</a>
           {message.content}
            <img src={message.image} alt="Fakepicture" />
            {message.user.name}
            {message.createdAt}
            
        </div>
    )
}

export default Message;

