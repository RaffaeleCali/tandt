import React from 'react'

export default function MessageFrom({lastMessage,message}) {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username 
  return (
    <div  className='message-row'>
      {isFirstMessageByUser && (
        <div 
          className='message-avatar'
          style={{backgroundImage : `url(${message?.sender?.avatar})`}}
          >

        </div>
      )}
      {message?.attachments?.lenght >0 
        ? (
      <img
          src= {message.attachments[0].file}
          alt ="message-attachments"
          className='message-image'
          style={{marginLeft: isFirstMessageByUser ? "4px" : "48px"}}
      />
        ) : (
          <div className='message' style={{float:"right",backgroundColor:"teal"}}>
            {message.text}
          </div>
        )
      }
    </div>
  )
}
