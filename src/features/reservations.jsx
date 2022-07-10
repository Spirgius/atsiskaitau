import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        value: {
            dates: [
                {
                    day:1,
                    reservedBy: null
                },
                {
                    day:2,
                    reservedBy: null
                },
                {
                    day:3,
                    reservedBy: null
                },
                {
                    day:4,
                    reservedBy: null
                },
                {
                    day:5,
                    reservedBy: null
                },
                {
                    day:6,
                    reservedBy: null
                },
                {
                    day:7,
                    reservedBy: null
                },
                {
                    day:8,
                    reservedBy: null
                },
                {
                    day:9,
                    reservedBy: null
                },
                {
                    day:10,
                    reservedBy: null
                },
                {
                    day:11,
                    reservedBy: null
                },
                {
                    day:12,
                    reservedBy: null
                },
                {
                    day:13,
                    reservedBy: null
                },
                {
                    day:14,
                    reservedBy: null
                },
                {
                    day:15,
                    reservedBy: null
                },
                {
                    day:16,
                    reservedBy: null
                },
                {
                    day:17,
                    reservedBy: null
                },
                {
                    day:18,
                    reservedBy: null
                },
                {
                    day:19,
                    reservedBy: null
                },
                {
                    day:20,
                    reservedBy: null
                },
                {
                    day:21,
                    reservedBy: null
                },
                {
                    day:22,
                    reservedBy: null
                },
                {
                    day:23,
                    reservedBy: null
                },
                {
                    day:24,
                    reservedBy: null
                },
                {
                    day:25,
                    reservedBy: null
                },
                {
                    day:26,
                    reservedBy: null
                },
                {
                    day:27,
                    reservedBy: null
                },
                {
                    day:28,
                    reservedBy: null
                },
                {
                    day:29,
                    reservedBy: null
                },
                {
                    day:30,
                    reservedBy: null
                }
            ],
            selectedDate: null
        }
    },
    reducers: {
        logDates: (state, action) => {
            console.log(state.value.dates)
            console.log(state.value.selectedDate)
        },
        setCurrentDate: (state, action)=> {
            if (state.value.dates[action.payload.day-1].reservedBy === null) {
                state.value.dates[action.payload.day-1].reservedBy = action.payload.id
            } else {
                state.value.dates[action.payload.day-1].reservedBy = null
            }
            state.value.selectedDate = state.value.dates[action.payload.day-1]
            console.log(action.payload)
        }
    }
})

export const {logDates, setCurrentDate} = reservationsSlice.actions;
export default reservationsSlice.reducer;