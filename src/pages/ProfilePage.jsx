import React from 'react'
import UserProfile from '../components/UserProfile'

const ProfilePage = () => {


  return (
    <div className="margin-nav profilePage container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <UserProfile/>
    </div>
    )
}

export default ProfilePage


/* <div>
    <div className="image">
        <img className='is-rounded' src={userState.currentUser.image} alt=""/>
    </div>
    <h3>{userState.currentUser.email}</h3>

    <input ref={photoRef} type="text" placeholder="photo url"/>
    <button onClick={changePhoto}>Change photo</button>
</div> */