import React from 'react'
import {useRef, useState}  from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {updatePhoto, updatePassword} from "../features/user";

const UserProfile = () => {
  const dis = useDispatch()
  const photoRef = useRef()
  const userState = useSelector(state => state.user.value)
  const nav = useNavigate()


  const passOldRef = useRef()
  const passNewOneRef = useRef()
  const passNewTwoRef = useRef()

  const [error, setError] = useState(null)

  const validatePass = (pass) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_+])(?=.{4,20}$)/
    const validation = passRegex.test(pass)
    return validation
    };

    function roleClass (role) {
        if (role === 'admin') return 'tag is-success'
        if (role === 'regular') return 'tag is-light'
    }

  function changePhoto() {
      const nickname = userState.currentUser.nickname
      const imageUrl = photoRef.current.value

      const userIndex = userState.allUsers.findIndex(x => x.nickname === nickname)

      let userUpdated = {...userState.currentUser}
      userUpdated.image = imageUrl

      dis(updatePhoto({
          index: userIndex,
          current: userUpdated
      }))

      photoRef.current.value = ''
  }

  function changePass() {
    let invalid = false

    const nickname = userState.currentUser.nickname
    const realOldPass = userState.currentUser.password

    const changing = {
        oldPass: passOldRef.current.value,
        newPassOne: passNewOneRef.current.value,
        newPassTwo: passNewTwoRef.current.value
    }
    
    if(changing.oldPass !== realOldPass) invalid = "Check your old password"
    if(!validatePass(changing.newPassOne)) invalid = "New password must consist at least one upper and lower case letters, one special symbol (!@#$%^&*_+) and must be between 4 to 20 characters long"
    if(changing.newPassOne !== changing.newPassTwo) invalid = "New password doesn't match"


    const userIndex = userState.allUsers.findIndex(x => x.nickname === nickname)

    if(invalid) return setError(invalid)
    else {
            let userUpdated = {...userState.currentUser}
            userUpdated.password = changing.newPassOne
        
            dis(updatePassword({
                index: userIndex,
                current: userUpdated
            }))
            setError(false)
            passOldRef.current.value = ''
            passNewOneRef.current.value = ''
            passNewTwoRef.current.value = ''
    }



  }


  return (
    <div className="profileCard card box is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <header className="card-header is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
            <span className={roleClass(userState.currentUser.role)}>{userState.currentUser.role}</span>
            <p className="card-header-title">
            {userState.currentUser.nickname}
            </p>
        </header>

        <br />

        <div className="image">
            <img className='profilePic is-rounded' src={userState.currentUser.image} alt="Placeholder image"/>
        </div>

        <br />

        <div className="field is-flex is-justify-content-center is-flex-direction-column is-aling-items-center">
            <label className='label'>Change profile Picture</label>
            <p className="control">
                <input ref={photoRef} className="input" type="text" placeholder="Change picture"/>
            </p>
                <a onClick={changePhoto}  className="button is-primary">
                Change profile picture
                </a>
        </div>
        <div className="field is-flex is-justify-content-center is-flex-direction-column is-aling-items-center">
            <label className='label'>Change password</label>
            <p className="control">
                <input ref={passOldRef} className="input" type="password" placeholder="Old password"/>
            </p>
            <p className="control">
                <input ref={passNewOneRef} className="input" type="password" placeholder="New password"/>
            </p>
            <p className="control">
                <input ref={passNewTwoRef} className="input" type="password" placeholder="Repeat new password"/>
            </p>
                <a onClick={changePass}  className="button is-primary">
                Change password
                </a>
        </div>
                {error && <div className="notification is-danger">
                    {error}
                </div>}
                <button className='button' onClick={()=>console.log(userState.currentUser.password)}></button>
    </div>

)
}

export default UserProfile

