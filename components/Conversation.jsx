import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Conversation = () => {

  const currentConvo = useSelector(state => state.chatEngine.value.currentChatRoom)

  return (
    <div className='is-flex-grow-5'>
      <button className="button" onClick={()=> console.log(currentConvo)}></button>
    </div>
  )
}

export default Conversation