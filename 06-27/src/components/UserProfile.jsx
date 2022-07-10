import React from 'react'
import {useRef}  from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {updatePhoto} from "../features/user";

const UserProfile = () => {
  const dis = useDispatch()
  const photoRef = useRef()
  const userState = useSelector(state => state.user.value)
  const nav = useNavigate()

  function changePhoto() {
      const email = userState.currentUser.email
      const imageUrl = photoRef.current.value

      const userIndex = userState.allUsers.findIndex(x => x.email === email)

      let userUpdated = {...userState.currentUser}
      userUpdated.image = imageUrl

      dis(updatePhoto({
          index: userIndex,
          current: userUpdated
      }))
  }


  return (
    <div className="profileCard card box is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <header className="card-header">
            <p className="card-header-title">
            {userState.currentUser.email}
            </p>
        </header>

        <br />

        <div className="image">
            <img className='is-rounded' src={userState.currentUser.image} alt="Placeholder image"/>
        </div>

        <br />

        <div className="field">
            <input ref={photoRef} className="input" type="text" placeholder="Change picture"/>
        </div>

        <br />

        <div className="field is-grouped is-flex is-justify-content-center is-flex-wrap-wrap is-aling-items-center">
            <p className="control">
                <a onClick={changePhoto}  className="button is-primary">
                Change profile picture
                </a>
            </p>
            <p className="control">
                <a onClick={()=> nav('/reservations')} className="button is-light">
                Go to Reservations
                </a>
            </p>
        </div>
    </div>

)
}

export default UserProfile

