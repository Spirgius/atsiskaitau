import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addChatroom } from '../features/chatEngine'

const Modal = (props) => {

    const dis = useDispatch()

    const allUsers = useSelector(state => state.user.value.allUsers)
    const currentUser = useSelector(state => state.user.value.currentUser)




    function roleClass (role) {
        if (role === 'admin') return 'tag is-success'
        if (role === 'regular') return 'tag is-light'
    }

    function addConvo (id) {

        const selectedUser = allUsers.find(x=> x.uid === id)

        const currentUserId = currentUser.uid

        const newConvo = {
            participants: [currentUserId, id],
            messages: [],
            isBlockedBy: false
        }

        if([...currentUser.blacklist].includes(id)) newConvo.isBlockedBy = currentUserId

        if([...selectedUser.blacklist].includes(currentUser.uid)) newConvo.isBlockedBy = id


        dis(addChatroom(newConvo))



        
        console.log(selectedUser)

        props.datule.setModalState('modal')
    }

  return (
    <div className={props.datule.getModalState}>
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className="box is-flex is-flex-wrap-wrap is-justify-content-space-around allUsersPage">
                {allUsers.map(x=>   <div className="allUsersSingleItem card is-flex is-flex-direction-column is-align-items-center is-justify-content-center" onClick={()=>addConvo(x.uid)}>
                                        <span className={roleClass(x.role)}>{x.role}</span>
                                                    <p className="card-header-title">{x.nickname}</p>
                                            <div className="image">
                                                <img className='is-rounded allUsersProfilePic' src={x.image}/>
                                            </div>
                                    </div>)}
            </div>
        </div>

        <button onClick={()=>props.datule.setModalState('modal')} className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export default Modal

