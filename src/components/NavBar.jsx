import React from "react"
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "../features/user";


export default function Navbar() {
    const dis = useDispatch()
    const nav = useNavigate()
    const currentUser = useSelector(state => state.user.value.currentUser)

    function logout() {
      dis(setCurrentUser(null))
      nav('/')
  }
    const [isActive, setisActive] = React.useState(false)
  
    return (
      <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt='Logo'
              width='112'
              height='28'
            />
          </a>
  
          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        {!currentUser ? 
        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a onClick={()=>{nav('/')}} className='navbar-item'>
                Login
              </a>
              <a onClick={()=>{nav('/register')}} className='navbar-item'>
                Register
              </a>
            </div>
          </div>
        </div> :

        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a onClick={()=>{nav('/profile')}} className='navbar-item'>
              Profile
            </a>
            <a onClick={()=>{nav('/reservations')}} className='navbar-item'>
              Reservations
            </a>
            <a onClick={logout} className='navbar-item'>
              Logout
            </a>
          </div>
        </div>
        </div>
        
      }
      </nav>
    )
  }