import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllUsersSingleItem = ({item}) => {
    const nav = useNavigate()

    function roleClass (role) {
        if (role === 'admin') return 'tag is-success'
        if (role === 'regular') return 'tag is-light'
    }


  return (
    <div className="allUsersSingleItem card box is-flex is-flex-direction-column is-align-items-center is-justify-content-center" onClick={() => nav('/user/'+item.nickname)}>
            <header className='card-header is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
                        <span className={roleClass(item.role)}>{item.role}</span>
                        <p className="card-header-title">{item.nickname}</p>
            </header>
                <div className="image">
                    <img className='is-rounded allUsersProfilePic' src={item.image}/>
                </div>

    </div>
  )
}

export default AllUsersSingleItem