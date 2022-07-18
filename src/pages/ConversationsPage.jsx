import React from 'react'
import ChatRooms from '../components/ChatRooms'
import Conversation from '../components/Conversation'

const ConversationsPage = () => {
  return (
    <div className='page container'>
      <ChatRooms/>
      <Conversation/>
    </div>
  )
}

export default ConversationsPage