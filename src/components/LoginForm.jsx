import React from 'react'
import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/user";


const LoginForm = () => {


    const nicknameRef = useRef()
    const passRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const allUsers = useSelector(state => state.user.value.allUsers)
    const [error, setError] = useState(null)

    function loginUser() {
        const user = {
            nickname: nicknameRef.current.value,
            password: passRef.current.value
        }

        const userLoggedIn = allUsers.find(x => x.nickname === user.nickname && x.password === user.password)
        if(!userLoggedIn) return setError("Check your credentials and try again")

        dis(setCurrentUser(userLoggedIn))

        nav('/profile')
    }


  return (
    <div className='form box is-flex is-justify-content-center is-flex-direction-column'>
    <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input ref={nicknameRef} className="input" type="text" placeholder="Username"/>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
        </p>
    </div>
    <div className="field">
        <p className="control has-icons-left">
            <input ref={passRef} className="input" type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
            </span>
        </p>
    </div>
    <div className="field is-grouped is-flex is-justify-content-center">
        <p className="control">
            <a onClick={()=> loginUser()} className="button is-primary">
            Login
            </a>
        </p>
        <p className="control">
            <a onClick={()=> console.log(allUsers)} className="button is-light">
                Cancel
            </a>
        </p>
    </div>
    {error && <div class="notification is-danger">
                        {error}
                        </div>}
</div>
  )
}

export default LoginForm