import React from 'react'
import {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../features/user";
import {useNavigate} from "react-router-dom";


const RegistrationForm = () => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const [error, setError] = useState(null)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function registerUser() {
        let invalid = false

        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value
        }

        if(!validateEmail(user.email)) invalid = "bad email provided"
        if(user.passOne.length < 4 || user.passOne.length > 20) invalid = "pass is too short or too long"
        if(user.passOne !== user.passTwo) invalid = "passwords should match"

        if(invalid) return setError(invalid)

        dis(addUser(user))
        nav('/')
    }

  return (
    <div className='form box is-flex is-justify-content-center is-flex-direction-column'>
        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input ref={emailRef} className="input" type="email" placeholder="Email"/>
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div className="field">
            <p className="control has-icons-left">
                <input ref={passOneRef} class="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
            </p>
        </div>        
        <div className="field">
            <p className="control has-icons-left">
                <input ref={passTwoRef} class="input" type="password" placeholder="Repeat password"/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div className="field is-grouped is-flex is-justify-content-center">
            <p className="control">
                <a onClick={registerUser} class="button is-primary">
                Submit
                </a>
            </p>
            <p className="control">
                <a className="button is-light">
                Cancel
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