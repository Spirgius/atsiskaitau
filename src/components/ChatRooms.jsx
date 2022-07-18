import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from './Modal'
import { deleteChatroom, blockConvo} from '../features/chatEngine'
import { addToBlacklist } from '../features/user'


const ChatRooms = () => {

    const dis = useDispatch()
    const [getModalState, setModalState] = useState('modal')


    const allUsers = useSelector(state => state.user.value.allUsers)
    const currentUser = useSelector(state => state.user.value.currentUser)
    const allChatRooms = useSelector(state => state.chatEngine.value.chatRooms)

      
    const userChatRooms = allChatRooms.filter(x=> x.participants.includes(currentUser.uid))

    function roleClass (participants) {
      if (recipientInfo(participants).role === 'admin') return 'tag is-success'
      if (recipientInfo(participants).role === 'regular') return 'tag is-light'
    }

    // function blockedCheck (x) {
    //   if (x !== false)
    // }

    function recipientInfo ([uid]) {


      let notUserId = null
      if (uid[0] === currentUser.uid) notUserId = uid[1]
      if (uid[1] === currentUser.uid) notUserId = uid[0]


      const friendObj = allUsers.filter(x => x.uid === notUserId)

      const friendInfo = {
        nickname: friendObj[0].nickname,
        role: friendObj[0].role,
        image: friendObj[0].image
      }

      return friendInfo

    }




  function changeCurrentConvo (conId) {

      const selectedConvo = allChatRooms.find(x => x.convoId === conId)

      const selectedConvoId = allChatRooms.findIndex(x => x.convoId === conId)

      console.log(selectedConvo)
      console.log(selectedConvoId)

  }

  function deleteConvo (conId) {

    const selectedConvoIndex = allChatRooms.findIndex(x => x.convoId === conId)

    dis(deleteChatroom(selectedConvoIndex))
  }

  function banPerson ([uid], conId) {

    let notUserId = null

      if (uid[0] === currentUser.uid) notUserId = uid[1]
      if (uid[1] === currentUser.uid) notUserId = uid[0]
    

    const selectedConvoIndex = allChatRooms.findIndex(x => x.convoId === conId)
    const currentUserIndex = allUsers.findIndex(x => x.uid === currentUser.uid)

    dis(addToBlacklist({index: currentUserIndex, notUserId: notUserId}))
    dis(blockConvo({index: selectedConvoIndex, uid: currentUser.uid}))

  }



  return (
    <div className='padding0 box height100 is-flex is-flex-direction-column is-align-items-center is-flex-grow-1'>
        <button onClick={() => setModalState('modal is-active')} className="width100 button is-primary">New conversation!</button>
        <br />
        {userChatRooms.map(x =>
                                  <article className="media card box" >
                                    <figure className="media-left pointer">
                                      <p className="image is-64x64">
                                        <img className='is-rounded'src={recipientInfo([x.participants]).image}/>
                                      </p>
                                    </figure>
                                    <div className="media-content">
                                      <div className="content">
                                        <p>
                                          <strong>{(recipientInfo([x.participants]).nickname)}</strong> <small><span className={roleClass([x.participants])}>{recipientInfo([x.participants]).role}</span></small>
                                        </p>
                                        <button onClick={()=>changeCurrentConvo(x.convoId)} className="button width100 is-light is-link">Jump in</button>
                                      </div>
                                    </div>
                                    <div className="media-right">
                                      <a className="level-item">
                                            <span onClick={()=>deleteConvo(x.convoId)} className="icon is-small"><i className="fas fa-trash"></i></span>
                                      </a>
                                      <br />
                                      <a className="level-item">
                                            <span onClick={()=>banPerson([x.participants], x.convoId)} className="icon is-small"><i className="fas fa-ban"></i></span>
                                      </a>
                                    </div>
                                  </article>)}



        <Modal datule={{getModalState, setModalState}}/>
    </div>
  )
}

export default ChatRooms






