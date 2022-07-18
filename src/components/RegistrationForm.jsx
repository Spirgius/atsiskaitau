import React from 'react'
import {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../features/user";
import {useNavigate} from "react-router-dom";


const RegistrationForm = () => {
    const nicknameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    const roleRef = useRef()
    const allUsers = useSelector(state => state.user.value.allUsers)



    const nav = useNavigate()
    const dis = useDispatch()

    const [error, setError] = useState(null)

    const validatePass = (pass) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_+])(?=.{4,20}$)/
        const validation = passRegex.test(pass)
        return validation
    };

    function registerUser() {
        let invalid = false

        const user = {
            nickname: nicknameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            role: roleRef.current.value
        }

        // if(!validateEmail(user.email)) invalid = "bad email provided"
        if(user.nickname.length < 4 || user.nickname.length > 20) invalid = "Username must be between 4 to 20 characters long"
        if(!validatePass(user.passOne)) invalid = "Password must consist at least one upper and lower case letters, one special symbol (!@#$%^&*_+) and must be between 4 to 20 characters long"
        if(user.passOne !== user.passTwo) invalid = "Passwords must match"
        if (allUsers.find(x=>x.nickname === user.nickname))invalid = 'Username is taken'
        
        if(!allUsers.find(x=>x.nickname === user.nickname) && invalid === false) {
            dis(addUser(user))
            nav('/')
        }
        
        if(invalid) return setError(invalid)

    }

    function testas () {
        let validation = null
        if (!allUsers.find(x => x.nickname === nicknameRef.current.value)) {
            validation = 'validu'
        }
        if (allUsers.find(x => x.nickname === nicknameRef.current.value)) {
            validation = 'nevalidu'
        }

        console.log(validation)
        
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
                <input ref={passOneRef} className="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
            </p>
        </div>        
        <div className="field">
            <p className="control has-icons-left">
                <input ref={passTwoRef} className="input" type="password" placeholder="Repeat password"/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div className="field">
        <label class="label">Subject</label>
            <div className="control">
                <div className="select is-multiple">
                    <select ref={roleRef}>
                        <option value="regular">Regular</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="field is-grouped is-flex is-justify-content-center">
            <p className="control">
                <a onClick={registerUser} className="button is-primary">
                Submit
                </a>
            </p>
            <p className="control">
                <a onClick={()=>console.log(allUsers)} className="button is-light">
                Cancel
                </a>
                <a onClick={()=>testas()} className="button is-light">
                Test
                </a>
            </p>
        </div>
        {error && <div className="notification is-danger">
            {error}
        </div>}
    </div>
  )
}

export default RegistrationForm