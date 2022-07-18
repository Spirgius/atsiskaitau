import React from 'react'
import {useSelector} from "react-redux";
import AllUsersSingleItem from '../components/AllUsersSingleItem';

const AllUsersPage = () => {

    const allUsers = useSelector(state => state.user.value.allUsers)

    
  return (
    <div className='page container is-flex is-flex-wrap-wrap is-justify-content-space-around allUsersPage'>
        {allUsers.map(x=> <AllUsersSingleItem key={x.uid} item={x}/>)}
    </div>
  )
}

export default AllUsersPage