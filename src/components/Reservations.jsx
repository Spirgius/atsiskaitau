import { current } from '@reduxjs/toolkit';
import React from 'react'
import {useRef}  from 'react';
import {useSelector, useDispatch} from "react-redux";
// import { useNavigate } from 'reat-router-dom';
import { logDates, setCurrentDate } from "../features/reservations";

const Reservations = () => {

    const dis = useDispatch()
    const userState = useSelector(state => state.user.value)
    const reservationData = useSelector(state => state.reservations.value)

    // const nav = useNavigate()

    function test(d) {
        const userId = userState.currentUser.id
        
  
        dis(setCurrentDate({
            day: d,
            id: userId,
        }))

    }


  return (
    <div className='box'>
        <div className="calendarWrap box is-flex is-flex-direction-row is-flex-wrap-wrap">
            {
            reservationData.dates.map((x, i) => <div reservedBy={null} onClick={()=>test(i+1)} className='dateBox tag is-large is-light '>
                <div className='day'>{x.day}</div>
                {!x.reservedBy ? <div className='tag is-success'>
                    <i class="fa fa-check" aria-hidden="true"></i>
                    </div> :
                <div className='tag is-danger'>
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                </div> }
            </div>
                )
            }
        </div>
        <button onClick={()=>console.log(userState.currentUser)}>click</button>
        <button onClick={logDates}>logDates</button>
        <button onClick={test}>setCurrentDate</button>
    </div>
  )
}

export default Reservations