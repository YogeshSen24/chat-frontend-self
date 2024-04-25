import React from 'react'
import MessageBubble from '../components/chat/messageBubble.jsx'
import FriendList from '../components/lists/FriendList.jsx'
import MessageWithSingleImage from '../components/chat/MessageWithSingleImage.jsx'
import MessageWithMultipleImage from '../components/chat/MessageWithMultipleImage.jsx'
import FileBubble from '../components/chat/FileBubble.jsx'
const Chat = () => {
  return (
    <div  className='flex h-screen w-full' >

        <FriendList/>
      
      <div className='flex flex-col gap-5 h-full overflow-scroll w-full'>
      <MessageBubble/>
      <MessageWithSingleImage/>
      <MessageWithMultipleImage/>
      <FileBubble/>

      </div>
    </div>
  )
}

export default Chat
