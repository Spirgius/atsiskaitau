import React from 'react'
import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {deleteUser} from "../features/user";


const SingleUserPage = () => {
    const dis = useDispatch()
    const nav = useNavigate()

    const currentUser = useSelector(state => state.user.value.currentUser)
    const {nickname} = useParams()


    let adminPanel = false
    
    const allUsers = useSelector(state => state.user.value.allUsers)
    
    const selectedUser = allUsers.find(x => x.nickname === nickname)

    const selectedUserIndex = allUsers.findIndex(x => x.nickname === nickname)

    
    function dltUser () {

        dis(deleteUser(selectedUserIndex))
        nav('/allUsers')
    }
    
    if (currentUser.role === 'admin') adminPanel = <button className='button is-danger' onClick={dltUser}>Delete {selectedUser.nickname}</button>

    function roleClass (role) {
        if (role === 'admin') return 'tag is-success'
        if (role === 'regular') return 'tag is-light'
    }

  return (
    <div className="page container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <div className="card box is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
            <header className="card-header is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
                <span className={roleClass(selectedUser.role)}>{selectedUser.role}</span>
                <p className="card-header-title">
                {selectedUser.nickname}
                </p>
            </header>
            <br />
            <div className="image">
                <img className='profilePic is-rounded' src={selectedUser.image} alt="Placeholder image"/>
            </div>
            <br />
            {adminPanel}
            <br />
        </div>

    </div>
  )
}

export default SingleUserPage